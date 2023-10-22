const mongoose=require("mongoose");

const patientSchema=new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    appointments:{type:Number,default:0},
    timings:{type:String,default:''},
    gender:{type:String,default:''},
    age:{type:String,default:''},
    condition:{type:String,default:''},
    location:{type:String,default:''}
})



const patient=mongoose.model("patient",patientSchema);
module.exports=patient