const mongoose=require("mongoose");

const patientSchema=new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    appointments:{type:Number,default:0},
    timings:String,
    gender:String,
    age:String,
    condition:String,
    location:String
})



const patient=mongoose.model("patient",patientSchema);
module.exports=patient

