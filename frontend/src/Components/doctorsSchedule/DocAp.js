import React from 'react'
import styles from './DoctorsSchedule.module.css'
import axios from 'axios'
import { API_BASE_URL } from '../../constants'


const DocAp = (ap) => {

    const buttonHandler=async(name)=>{
        try{
            await axios.delete(`${API_BASE_URL}/delete`,name);
            window.location.reload(true);
            // navigate('/');
            
          }
          catch(e){
            console.log("cannot this appointment");
      
          }
    
    }
  return (
      <div class={styles['appointment-details']}>
          <p><strong>Patient Name:</strong>{ap.PatientName}</p>
          <p><strong>Appointment Time:</strong>{ap.AppointmentTime}</p>
          <p><strong>Fees:</strong>{ap.Fees}</p>
          <button className={styles.btn} onClick={()=>buttonHandler(ap.PatientName)}>Cancel Appointments</button>
      </div>
  )
}

export default DocAp