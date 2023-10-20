const mongoose=require('mongoose');
const patient=require('./models/Patient')
const dummyData=[
    {
        "name": "Om",
        "email": "om@gmail.com",
        "password": "1234",
        "appointments": 2,
        "timings": "1pm",
        "gender": "Male",
        "age": 20,
        "condition": "heart",
        "location": "delhi"
    }
    
]
async function seedPDb(){
    await patient.deleteMany({})
    await patient.insertMany(dummyData)
    
}
module.exports=seedPDb;
