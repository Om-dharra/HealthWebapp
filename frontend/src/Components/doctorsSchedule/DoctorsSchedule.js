import React, { useEffect, useState } from 'react'
import styles from './DoctorsSchedule.module.css'
import axios from 'axios';
import DocAp from './DocAp';
import { API_BASE_URL } from '../../constants';

const DoctorsSchedule = () => {

    let [docs,setdocs]=useState([]);
    async function getdoc(){
      let res=await axios.get(`${API_BASE_URL}/docAppointment`);
      console.log(res.data);
      setdocs([{"PatientName": "Om", "AppointmentTime": "1:00 PM", "Fees": "250"}, ...res.data]);
    }
    useEffect(()=>{
      getdoc();
    },[])
    

  return (
    <section>
      <div class={styles.container}>
        <h1>Hi Sarah You have these appointments</h1>
              <ul>
                  {
                      docs.map((ap, index) => {
                          return (
                              <DocAp
                                  key={index}
                                  PatientName={ap.PatientName}
                                  AppointmentTime={ap.AppointmentTime}
                                  Fees={ap.Fees}
                              />
                          )





                      })
                  }

        </ul>
              
      </div>
    </section>

  )
}

export default DoctorsSchedule