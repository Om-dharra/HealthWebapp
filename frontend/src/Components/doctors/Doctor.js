import React from 'react'
import styles from './Doctor.module.css'
import { useNavigate } from 'react-router-dom'
const Doctor = (props) => {
  let navigate=useNavigate();

  const buttonHandler=()=>{
    navigate('/bookings');

  }
    
  return (
    <div className={styles.card}>
        <div className={styles.category} > {props.name} </div>
        
        <div className={styles.heading}> {props.specialize}</div>
        <div className={styles.heading}>Experience: {props.experience}</div>
        <div className={styles.heading}>ConsultationFee: {props.ConsultationFee}</div>
        <button className={styles.btn} onClick={buttonHandler}>Book Appointments</button>
        
    </div>
  )
}

export default Doctor
