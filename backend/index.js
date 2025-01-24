const connect = require('./connection/connect')
const Question = require('./models/Question');
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
app.use(cors({ origin: process.env.CORS_ORIGIN }));

app.use(express.json());
connect();

app.get("/",(req,res)=>{
    res.send("Hello World");
})


app.get("/question", async (req, res) => {
    const title = req.query.title || "";
    const page = Number(req.query.page) || 0;
    const selectedFilters = req.query.selectedFilters.split(",") || [];

    // console.log(req.body);
    // console.log(title);
    // console.log(page);
    // console.log(selectedFilters);

    try {
        const data = await Question.aggregate([
            {
                $match: {
                    $and: [
                        { title: { $regex: title, $options: "i" } },
                        { type: { $in: selectedFilters } },
                    ],
                },
            },
            {
                $facet: {
                    TotalResponse: [{ $count: "count" }],
                    Document: [{ $skip: page * 10 }, { $limit: 10 }],
                },
            },
        ]);
        if(data[0].TotalResponse.length== 0) {
            return res.json({ 
                Document: [],
                total: 0 
            });
        }
        // console.log(data[0].TotalResponse[0].count);
        res.json({
            Document: data[0].Document,
            total: data[0].TotalResponse[0].count,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


app.listen(process.env.PORT, () => {
    console.log("Server is running at port 3000");
})