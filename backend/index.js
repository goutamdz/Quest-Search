const connect = require('./connection/connect')
const Question = require('./models/Question');
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({ origin: '*' }));

app.use(express.json());
connect();

app.post("/question", async (req, res) => {
    const title = req.query.title;
    const page = Number(req.query.page) || 0; // Default to page 0 if not provided

    try {
        const data = await Question.aggregate([
            {$match:{
                title:{$regex:title,$options:"i"}
            }},
            {
                $facet:{
                    TotalResponse:[{$count:"count"}],
                    Document:[{$skip:(page*10)},{$limit:(10)}]
                }
            }
        ])
        console.log(data[0]);
        res.json(data[0]);
    } catch (err) {
        res.json({ message: err.message });
    }
})

app.listen(3000, () => {
    console.log("Server is running at port 3000");
})
//Rearrange the words to form a sentence