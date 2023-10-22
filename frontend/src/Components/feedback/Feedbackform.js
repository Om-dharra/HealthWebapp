import React, { useRef,useState,useEffect } from 'react'
import styles from './Feedback.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../../constants';


const Feedbackform = () => {
  let navigate=useNavigate();
  const TimeDelay=useRef();
  const Docname=useRef();
  const formHandler=(e)=>{
    e.preventDefault();
    navigate('/')
  }
  
  const btnHandler=()=>{
    
    const delay = doc.current.value;
    const name=Docname.current.value;

    try {
      let res = axios.post(`${API_BASE_URL}/addtime`, { name,delay})
      
    }
    catch (err) {
      console.log("cannot update at this moment");
    }
  }
  let [docs,setdocs]=useState([]);
    async function getdoc(){
      let res=await axios.get(`${API_BASE_URL}/doctors`);
      console.log(res.data);
      setdocs(res.data);
    }
    useEffect(()=>{
      getdoc();
    },[])
    const doc=useRef();

    function handler(){
        for(let i=0;i<docs.length;i++){
            
            if(doc.current.value==docs[i].name.slice(0,3)){
              doc.current.value=docs[i].name;
              console.log(docs[i].name);
              break;
            }

        }
        
    }

  return (
    <section>
      <form onSubmit={formHandler}>
      <h2>FEEDBACK FORM</h2>
        <div class="form-row" id={styles.initial}>
          <div class="col">
            <input type="text" class="form-control" placeholder="Enter patient's name"/>
          </div>
          <div class="col">
            <label>
              Select Doctors: <input name="myInput" onChange={handler} ref={doc} />
            </label>
            
          
          </div>
        </div>
        <div class="alert alert-primary" role="alert">
            Please rate your experience on a scale of 1 to 5, with 5 being the highest and 1 being the lowest.Your feedback is important to us.
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Overall Experience</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1(Poor)</option>
              <option>2(Below Average)</option>
              <option>3(Average)</option>
              <option>4(Good)</option>
              <option>5(Excellent)</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Cleanliness and Hygiene</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1(Poor)</option>
              <option>2(Below Average)</option>
              <option>3(Average)</option>
              <option>4(Good)</option>
              <option>5(Excellent)</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Communication with Staff</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1(Poor)</option>
              <option>2(Below Average)</option>
              <option>3(Average)</option>
              <option>4(Good)</option>
              <option>5(Excellent)</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Quality of medical care</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1(Poor)</option>
              <option>2(Below Average)</option>
              <option>3(Average)</option>
              <option>4(Good)</option>
              <option>5(Excellent)</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Waiting time</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1(Too Long)</option>
              <option>2(Long)</option>
              <option>3(Average)</option>
              <option>4(Short)</option>
              <option>5(No wait)</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Facility and Amenities</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1(Poor)</option>
              <option>2(Below Average)</option>
              <option>3(Average)</option>
              <option>4(Good)</option>
              <option>5(Excellent)</option>
            </select>
        </div>
        <div class="form-group">
            <label for="parameter">How much time(in minutes) did you have to wait?</label>
            <input class="form-control" type="text" placeholder="Default input" id="parameter" ref={TimeDelay}/>
        </div>
        <div class="form-group">
            <label for="exampleFormControlTextarea1">Please provide suggestions or comments about your experience</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        <div class="form-group">
            <label for="checker">How did you hear about our hospital?</label>
          <div class="form-check form-group" id="checker">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label class="form-check-label" for="defaultCheck1">
              Referral
            </label>
          </div>
          <div class="form-check form-group" id="checker">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label class="form-check-label" for="defaultCheck1">
              Online search
            </label>
          </div>
          <div class="form-check form-group" id="checker">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label class="form-check-label" for="defaultCheck1">
              Advertisement
            </label>
          </div>
          <div class="form-check form-group" id="checker">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label class="form-check-label" for="defaultCheck1">
                Other(Please specify) <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </label>
          </div>
          </div>
          <div class="form-group">
            <label for="check">Would you recommend our hospital to others?</label>
          <div class="form-check form-group" id="check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label class="form-check-label" for="defaultCheck1">
              Yes
            </label>
          </div>
          <div class="form-check form-group" id="check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
            <label class="form-check-label" for="defaultCheck1">
              No
            </label>
          </div>
          </div>
          <button type="submit" onSubmit={btnHandler} class="btn btn-primary">Submit</button>
      </form>

    </section>
  )
}

export default Feedbackform