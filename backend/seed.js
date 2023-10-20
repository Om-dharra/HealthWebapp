const mongoose=require('mongoose');
const doctor=require('./models/Doctors')

const dummyData=[
    
        {
            "doc_id": 1,
            "name": "Sarah L. Smith",
            "specialize": "Dermatology",
            "experience": "7 years plus",
            "ConsultationFee": 250
        },
        {
            "doc_id": 2,
            "name": "John M. Anderson",
            "specialize": "Pediatrics",
            "experience": "10 years plus",
            "ConsultationFee": 350
        },
        {
            "doc_id": 3,
            "name": "Emily R. Clark",
            "specialize": "Orthopedics",
            "experience": "8 years plus",
            "ConsultationFee": 280
        },
        {
            "doc_id": 4,
            "name": "David W. Miller",
            "specialize": "Gynecology",
            "experience": "6 years plus",
            "ConsultationFee": 320
        },
        {
            "doc_id": 5,
            "name": "Laura A. Taylor",
            "specialize": "Neurology",
            "experience": "9 years plus",
            "ConsultationFee": 370
        },
        {
            "doc_id": 6,
            "name": "Michael P. Brown",
            "specialize": "Ophthalmology",
            "experience": "12 years plus",
            "ConsultationFee": 400
        },
        {
            "doc_id": 7,
            "name": "Jessica E. Harris",
            "specialize": "ENT",
            "experience": "5 years plus",
            "ConsultationFee": 290
        },
        {
            "doc_id": 8,
            "name": "Kevin S. Wilson",
            "specialize": "Urology",
            "experience": "11 years plus",
            "ConsultationFee": 380
        },
        {
            "doc_id": 9,
            "name": "Linda K. Hall",
            "specialize": "Psychiatry",
            "experience": "7 years plus",
            "ConsultationFee": 270
        },
        {
            "doc_id": 10,
            "name": "Brian J. Lee",
            "specialize": "Dentistry",
            "experience": "8 years plus",
            "ConsultationFee": 260
        },
        {
            "doc_id": 11,
            "name": "Amanda M. Roberts",
            "specialize": "Dermatology",
            "experience": "6 years plus",
            "ConsultationFee": 240
        },
        {
            "doc_id": 12,
            "name": "Robert L. Garcia",
            "specialize": "Pediatrics",
            "experience": "10 years plus",
            "ConsultationFee": 360
        },
        {
            "doc_id": 13,
            "name": "Nancy D. Johnson",
            "specialize": "Orthopedics",
            "experience": "9 years plus",
            "ConsultationFee": 290
        },
        {
            "doc_id": 14,
            "name": "James A. Martinez",
            "specialize": "Gynecology",
            "experience": "7 years plus",
            "ConsultationFee": 310
        },
        {
            "doc_id": 15,
            "name": "Samantha K. White",
            "specialize": "Neurology",
            "experience": "11 years plus",
            "ConsultationFee": 380
        },
        {
            "doc_id": 16,
            "name": "Daniel M. Adams",
            "specialize": "Ophthalmology",
            "experience": "8 years plus",
            "ConsultationFee": 390
        },
        {
            "doc_id": 17,
            "name": "Mary J. Green",
            "specialize": "ENT",
            "experience": "6 years plus",
            "ConsultationFee": 270
        },
        {
            "doc_id": 18,
            "name": "William D. Taylor",
            "specialize": "Urology",
            "experience": "12 years plus",
            "ConsultationFee": 400
        },
        {
            "doc_id": 19,
            "name": "Jennifer S. Lewis",
            "specialize": "Psychiatry",
            "experience": "10 years plus",
            "ConsultationFee": 320
        },
        {
            "doc_id": 20,
            "name": "Thomas L. Clark",
            "specialize": "Dentistry",
            "experience": "7 years plus",
            "ConsultationFee": 280
        },
        {
            "doc_id": 21,
            "name": "Susan M. Smith",
            "specialize": "Dermatology",
            "experience": "11 years plus",
            "ConsultationFee": 370
        },
        {
            "doc_id": 22,
            "name": "Richard A. Anderson",
            "specialize": "Pediatrics",
            "experience": "8 years plus",
            "ConsultationFee": 290
        },
        {
            "doc_id": 23,
            "name": "Karen L. Johnson",
            "specialize": "Orthopedics",
            "experience": "12 years plus",
            "ConsultationFee": 390
        },
        {
            "doc_id": 24,
            "name": "Joseph D. Martinez",
            "specialize": "Gynecology",
            "experience": "9 years plus",
            "ConsultationFee": 360
        },
        {
            "doc_id": 25,
            "name": "Catherine A. White",
            "specialize": "Neurology",
            "experience": "7 years plus",
            "ConsultationFee": 260
        },
        {
            "doc_id": 26,
            "name": "Paul S. Adams",
            "specialize": "Ophthalmology",
            "experience": "10 years plus",
            "ConsultationFee": 350
        },
        {
            "doc_id": 27,
            "name": "Elizabeth J. Green",
            "specialize": "ENT",
            "experience": "6 years plus",
            "ConsultationFee": 240
        },
        {
            "doc_id": 28,
            "name": "Mark L. Taylor",
            "specialize": "Urology",
            "experience": "8 years plus",
            "ConsultationFee": 270
        },
        {
            "doc_id": 29,
            "name": "Deborah M. Lewis",
            "specialize": "Psychiatry",
            "experience": "11 years plus",
            "ConsultationFee": 380
        },
        {
            "doc_id": 30,
            "name": "Christopher D. Clark",
            "specialize": "Dentistry",
            "experience": "9 years plus",
            "ConsultationFee": 320
        },
        {
            "doc_id": 31,
            "name": "Patricia A. Smith",
            "specialize": "Dermatology",
            "experience": "12 years plus",
            "ConsultationFee": 400
        },
        {
            "doc_id": 32,
            "name": "William A. Anderson",
            "specialize": "Pediatrics",
            "experience": "10 years plus",
            "ConsultationFee": 290
        },
        {
            "doc_id": 33,
            "name": "Linda L. Johnson",
            "specialize": "Orthopedics",
            "experience": "8 years plus",
            "ConsultationFee": 280
        },
        {
            "doc_id": 34,
            "name": "Robert D. Martinez",
            "specialize": "Gynecology",
            "experience": "6 years plus",
            "ConsultationFee": 270
        },
        {
            "doc_id": 35,
            "name": "Jennifer A. White",
            "specialize": "Neurology",
            "experience": "7 years plus",
            "ConsultationFee": 260
        },
        {
            "doc_id": 36,
            "name": "James S. Adams",
            "specialize": "Ophthalmology",
            "experience": "9 years plus",
            "ConsultationFee": 310
        },
        {
            "doc_id": 37,
            "name": "Amanda L. Green",
            "specialize": "ENT",
            "experience": "11 years plus",
            "ConsultationFee": 360
        },
        {
            "doc_id": 38,
            "name": "Richard D. Taylor",
            "specialize": "Urology",
            "experience": "10 years plus",
            "ConsultationFee": 350
        },
        {
            "doc_id": 39,
            "name": "Susan A. Lewis",
            "specialize": "Psychiatry",
            "experience": "12 years plus",
            "ConsultationFee": 390
        },
        {
            "doc_id": 40,
            "name": "Catherine L. Clark",
            "specialize": "Dentistry",
            "experience": "8 years plus",
            "ConsultationFee": 240
        }
    
    
]

async function seedDb(){
    await doctor.deleteMany({})
    await doctor.insertMany(dummyData)
    console.log("Db seeded")
}
module.exports=seedDb;
