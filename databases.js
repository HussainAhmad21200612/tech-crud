const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://hussain109164:21200612@cluster0.ozbkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("connetion succesfulll");
}).catch((e)=>{
    console.log(e);
})


const Schema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const Usermodel = mongoose.model("User",Schema);

module.exports =Usermodel;
