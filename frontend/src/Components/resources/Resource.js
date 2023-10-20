import React, { useRef } from 'react'
import styles from './Resource.module.css'
import UpdateComp from './UpdateComp';

const Resource = () => {
    let filter=useRef();
    let myTable=useRef();
    let tr=useRef();
    let filter2=useRef();
    let myTable2=useRef();
    let tr2=useRef();

    const data = {
        "doctors": 200,
        "nurses": 150,
        "beds": 700,
        "oxygen_cylinders": 300,
        "medicines": [
          { "name": "Painkillers", "quantity": 100 },
          { "name": "Antibiotics", "quantity": 70 },
          { "name": "First Aid Supplies", "quantity": 200 }, { "name": "Cardiovascular Medications", "quantity": 100 },
          { "name": "Blood Thinners", "quantity": 150 }
        ]
      }
      const searchFun=()=>{
        console.log();


      }
      const searchFun2=()=>{
        console.log();
        

      }
    

  return (
    <section>
        <div className={styles.container}>
        
              <div class="container" style={{gap:'20px'}}>
              <br/><br/><br/>
                  <table id="Table" ref={myTable}>
                      <thead>
                          <tr>
                              <th>Resource name</th>
                              <th>Total number</th>
                              <th>Available number</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td>Doctors</td>
                              <td>{data.doctors}</td>
                              <td>{data.doctors-30}</td>
                          </tr>
                          <tr>
                              <td>Nurses</td>
                              <td>{data.nurses}</td>
                              <td>{data.nurses-20}</td>
                          </tr>
                          <tr>
                              <td>Beds</td>
                              <td>{data.beds}</td>
                              <td>{data.beds-20}</td>
                          </tr>
                          <tr>
                              <td>Oxygen Cyllinders</td>
                              <td>{data.oxygen_cylinders}</td>
                              <td>{data.oxygen_cylinders-20}</td>
                          </tr>
                      </tbody>
                  </table>
                  <br/><br/><br/><br/>
                      <table id="T">
                          <h2>Medicines</h2>
                          <thead>
                              <tr>
                                  <th>
                                      Medicine name
                                  </th>
                                  <th>
                                      Total number
                                  </th>
                                  <th>
                                      Available number
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>Painkillers</td>
                                  <td>{data.medicines[0].quantity}</td>
                                  <td>{data.medicines[0].quantity-4}</td>
                              </tr>
                              <tr>
                                  <td>Antioboitics</td>
                                  <td>{data.medicines[1].quantity}</td>
                                  <td>{data.medicines[1].quantity-20}</td>
                              </tr>
                              <tr>
                                  <td>
                                      First Aid Supplies
                                  </td>
                                  <td>{data.medicines[2].quantity}</td>
                                  <td>{data.medicines[2].quantity-80}</td>
                              </tr>
                              <tr>
                                  <td>
                                      Cardiovascular Medicines
                                  </td>
                                  <td>{data.medicines[3].quantity}</td>
                                  <td>{data.medicines[3].quantity-40}</td>
                              </tr>
                              <tr>
                                  <td>
                                      Blood Thinners
                                  </td>
                                  <td>{data.medicines[4].quantity}</td>
                                  <td>{data.medicines[4].quantity-20}</td>
                              </tr>
                          </tbody>
                      </table>
              </div>
              

        </div>
          

    </section>
  )
}

export default Resource
