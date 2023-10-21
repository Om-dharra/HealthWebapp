import React,{useState} from 'react'
// import { useAutocomplete } from '@mui/base/useAutocomplete';
import styles from './Bookings.module.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { API_BASE_URL } from '../../constants';
// import { CDropdown,CDropdownToggle,CDropdownMenu,CDropdownItem } from '@coreui/react';

const Bookings = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event, value) => setSelectedOptions(value);
  let navigate=useNavigate();
  const timeSlots=["10AM","10:20AM","10:40AM","11AM","11:20AM","11:40AM","12PM","12:20PM","12:40PM","1PM","1:20PM","1:40PM"];

  async function bookAppHandler(){

    try{
      let res=await axios.post(`${API_BASE_URL}/schedule`,{selectedOptions});
      console.log(res.data);
      

    }
    catch(e){
      console.log("cannot book appointment at this moment")

    }
  }
  const formHandler=(e)=>{
    e.preventDefault();
    navigate('/appointment');
  }
  
  

  return (
    <form onSubmit={formHandler}>
      <div className={styles['container']}>Schedule Appointments</div>
      <div className={styles.dropdown}>

        <Autocomplete
          id="demo"
          options={timeSlots}    
          sx={{ width: 300 }}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} label="Select the Timing" />}
        />
        <br/><br/><br/> 
      </div>
      <div class="alert alert-warning" role="alert">
        Please remember that you may have to wait 5-10 minutes before your appointment.Please cooperate with us.
      </div>
      
      <button className={styles.btn} onClick={bookAppHandler}>Fill Entry Form</button>



    </form>
    
  )
}

export default Bookings