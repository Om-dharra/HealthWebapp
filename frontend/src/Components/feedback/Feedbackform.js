import React, { useRef } from 'react'
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
    const delay = TimeDelay.current.value;
    const name=Docname.current.value;

    try {
      let res = axios.post(`${API_BASE_URL}/addtime`, { name,delay})
      navigate('/')
    }
    catch (e) {
      console.log("cannot update at this moment");
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
            <input type="text" class="form-control" placeholder="Enter doctors's name" ref={Docname}/>
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
          <button type="submit" class="btn btn-primary">Submit</button>
      </form>

    </section>
  )
}

export default Feedbackform