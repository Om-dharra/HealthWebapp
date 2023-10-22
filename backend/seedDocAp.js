const mongoose=require('mongoose');
const docAp=require('./models/docAppointment');

const dummyData=[
  {
    "PatientName": "Om",
    "AppointmentTime": "1 Pm",
    "Fees": 250.00
  },

  {
    "PatientName": "John Doe",
    "AppointmentTime": "10:30 AM",
    "Fees": 100.00
  },
  {
    "PatientName": "Jane Smith",
    "AppointmentTime": "11:15 AM",
    "Fees": 120.00
  },
  {
    "PatientName": "Robert Johnson",
    "AppointmentTime": "12:00 PM",
    "Fees": 90.00
  },
  {
    "PatientName": "Emily Wilson",
    "AppointmentTime": "1:45 PM",
    "Fees": 110.00
  },
  {
    "PatientName": "Michael Brown",
    "AppointmentTime": "2:00 PM",
    "Fees": 95.00
  }
          

]

async function seedDDb(){
    await docAp.deleteMany({})
    await docAp.insertMany(dummyData)
    console.log("Db seeded")
}
module.exports=seedDDb;
