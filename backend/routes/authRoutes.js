const express=require("express");

const router=express.Router();

const Patient=require("../models/Patient");

router.post("/login", (req, res) => {
    console.log("Request received for /login");
    console.log(req.body);
    const { email, password } = req.body;
    //check email
    Patient.findOne({ email: email })
    .then((user)=>{
        if (user) {
            //check password
            if (password === user.password) {
              res.send({ message: "Login successfully", user: user });
            } else {
              res.send({ message: "Password and confirm password didn't match" });
            }
          } else {
            res.send({ message: "Please login to proceed" });
          }

    })
      
    
  });
  
 router.post("/signup", (req, res) => {
    console.log("Request received for /signup");
    console.log(req.body);
    const { nameemail, password } = req.body;
    //check email
    Patient.findOne({ email: email })
         .then((user) => {
             if (user) {
                 res.send({ message: "Patient is already registerd" });
             } else {
                 const patient = new Patient({
                     fname,
                     lname,
                     email,
                     password,
                 });
                 patient.save();


             }
     });

    
  });

module.exports=router



