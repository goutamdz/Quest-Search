require('dotenv').config();
const mongoose=require('mongoose');
function connect(){
    mongoose.connect(process.env.MONGODB_URL)
    .then((res)=>{console.log("Connected Succesfully")})
    .catch(err=>{console.log("couldn't connect to database because "+err.message)})
}
module.exports=connect;