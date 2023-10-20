const mongoose=require("mongoose");

const doctorSchema=new mongoose.Schema({
    doc_id:Number,
    name:String,
    specialize:String,
    experience:String,
    ConsultationFee:Number,
    noOfFeedbacks:{type:Number,default:0},
    AverageWaitingTime:{type:Number,default:0},
    appointments:{type:Number,default:0}
    

})


const doctor=mongoose.model("doctor",doctorSchema);
module.exports=doctor