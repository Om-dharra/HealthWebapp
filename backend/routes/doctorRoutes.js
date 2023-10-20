const express=require("express");

const router=express.Router();
const axios=require('axios');

const Doctors=require("../models/Doctors");
const Patient=require("../models/Patient");

router.get('/doctors',async(req,res)=>{
    try{
        let alldocs=await Doctors.find({});
        res.status(200).json(alldocs);
    }
    catch(e){
        res.status(400).json({msd:"something went wrong"});
    }

})
router.post("/addtime",async (req,res)=>{
    let {name,time}=req.body;
    
    let doc=await Doctors.findOne({name:name});
    res.status(200).json(doc); 
     
    let feedb=doc.noOfFeedbacks;
    feedb=feedb+1;
    console.log(feedb);
    
    let id=doc._id;
    console.log(id);
    console.log(doc);
    doc.noOfFeedbacks=feedb;
    await doc.save();
        
})
router.post("/schedule",async (req,res)=>{
    let {schedule}=req.body;
    const doc=Patient.findOneAndUpdate({name:"OM"},{timings:schedule});

})

router.post("/patient_Details",async (req,res)=>{
    const { location, Pname, Page, Pcondition, Pgender }=req.body;
    const doc=Patient.find({fname:Pname});
    Patient.findByIdAndUpdate({location:location})
    Patient.findByIdAndUpdate({age:Page})
    Patient.findByIdAndUpdate({condition:Pcondition})
    Patient.findByIdAndUpdate({gender:Pgender})

    // doc.location=location;
    // doc.age=Page;
    // doc.condition=Pcondition;
    // doc.gender=Pgender;
    // doc.save().then(function(err) {
    //     try {
    //         res.render("User created succesfully");
    //       } catch (err) {
    //         console.log(err);
    //       }
    // });
})
router.get('/patient',async(req,res)=>{
    try{
        let alldocs=await Patient.find({name:'Om'});
        res.status(200).json(alldocs);
    }
    catch(e){
        res.status(400).json({msd:"something went wrong"});
    }

})


module.exports=router;

