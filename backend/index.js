const express=require('express');
const app=express();
const mongoose = require('mongoose');

main().catch(err => console.log(err)).then(()=>{console.log("connected successfully!")});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}



app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.listen(2000,()=>{
    console.log("Server is running on port 3000");
})