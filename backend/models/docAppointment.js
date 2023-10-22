const mongoose=require("mongoose");

const docApSchema=new mongoose.Schema({
    PatientName:String,
    AppointmentTime:String,
    Fees:Number,

})


const docAppointment=mongoose.model("docAP",docApSchema);
module.exports=docAppointment