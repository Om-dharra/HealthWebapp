const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const cors=require('cors');
//require all what u have installed
const { mongoose } = require('mongoose');
const session=require("express-session");
const flash=require('connect-flash');
const seedDDb=require('./seedDocAp')
const seedDb=require('./seed.js');
//mongoose connection cloud
const uri='mongodb+srv://SIH_project:dtuheckers@cluster0.lbyqw96.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },)
.then(()=>{
    console.log("db connected")
})
.catch((err)=>{console.log(err)});

const sessionConfig={
    secret:'dtuheckers',
    resave:false,
    saveUninitialized:true,
    cookie:{
        http:true,
        expire:Date.now()+7*24*60*60*1000
    } 
}
// //for authentication
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
const authRoutes=require("./routes/authRoutes");
const docRoutes=require("./routes/doctorRoutes");

//middlewares 
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({origin:['http://localhost:3000', 'https://healthcare-app.netlify.app']})) //for frontend react connection

app.use(session(sessionConfig));

app.use(flash());
app.use(docRoutes);
app.use(authRoutes);

//just for checking if routes are working
app.get("/hello",(req,res)=>{
    res.status(200).json({msg:"Hi fitness enthusiast"});
})
// seedDb();
// seedPDb();
// seedDDb();
//routes




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))