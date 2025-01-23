const mongoose=require("mongoose");
const {Schema}=require('mongoose');

const QuestionSchema=new Schema({
    type:{
        type:String,
        required:true
    },
    anangramType:{
        type:String
    },
    blocks:[
        {
            text:String,
            showInOption:Boolean,
            isAnswer:Boolean
        }
    ],
    siblingId:{
        type:Schema.Types.ObjectId,
        ref:'Question'
    },
    solution:{
        type:String
    },
    title:{
        type:String,
        required:true
    },
    Options:[
        {
            text:String,
            isCorrectAnswer:Boolean
        }
    ]
    
})


const Question=mongoose.model("Question",QuestionSchema);
module.exports=Question;