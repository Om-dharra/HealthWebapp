import React, { useEffect, useState } from 'react'
import styles from './MyAppointment.module.css'
import axios from 'axios';
import Details from './Details';
import { API_BASE_URL } from '../../constants';

const MyAppointment = () => {

  let [patients,setpatient]=useState([]);
  async function getdoc() {
    let res = await axios.get(`${API_BASE_URL}/patient`);
    console.log(res.data);
    setpatient(res.data);
  }
  useEffect(() => {
    getdoc();
  }, [])


  return (
    <section>
      <div class={styles.container}>
        <h1>Appointment Confirmation</h1>
        <p>Thank you for scheduling an appointment with us. Below are the details of your appointment:</p>
        <ul>
          {
            patients.map((patient,index)=>{
              return <Details
                    key={index}
                    age={patient.age}
                    condition={patient.condition}
                    location={patient.location}
                    timings={patient.timings}
                    name={patient.name}



                  />

            })
          }
        </ul>
        <Details/>
        
      </div>

    </section>
  )
}

export default MyAppointment
