import React from 'react'
import styles from './MyAppointment.module.css'

const Details = (patient) => {
  return (

      <div class={styles['appointment-details']}>
          <p><strong>Patient age:</strong> {patient.age}</p>
          <p><strong>Appointment Type:</strong> {patient.condition}</p>
          <p><strong>Location:</strong> {patient.location}</p>
          <p><strong>Patient Name:</strong>{patient.name}</p>
          <p><strong>Appointment Time:</strong> {patient.timings}</p>
      </div>

          
  )
}

export default Details