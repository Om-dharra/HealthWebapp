import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Doctor from '../doctors/Doctor'
import styles from './About.module.css'
import { API_BASE_URL } from '../../constants'

const About = () => {
    let [docs,setdocs]=useState([]);
    async function getdoc(){
      let res=await axios.get(`${API_BASE_URL}/doctors`);
      console.log(res.data);
      setdocs(res.data);
    }
    useEffect(()=>{
      getdoc();
    },[])
    
    return (
      <main className={styles.docs}>
        
            <ul>
                {
                    docs.map((doc, index) => {
                        return <Doctor
                            key={doc.doc_id}
                            name={doc.name}
                            specialize={doc.specialize}
                            experience={doc.experience}
                            ConsultationFee={doc.ConsultationFee}

                            
                        />

                    })

                }
            </ul>
        
      </main>
    )
}
export default About