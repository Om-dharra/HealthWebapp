import React,{useRef, useState} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import styles from './Appointment.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Appointment = () => {
    let navigate=useNavigate();
    const [validated, setValidated] = useState(false);
    let location="";
    const name=useRef();
    const city=useRef();
    const state=useRef();
    const zipcode=useRef();
    const age=useRef();
    const gender=useRef();
    const condition=useRef();

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    location=location.concat(city.current.value," ",state.current.value," ",state.current.value);

    const Pname=name.current.value;
    const Pgender=gender.current.value;
    const Pcondition=condition.current.value;
    const Page=age.current.value;
    // try {
    //     //   let res = await axios.post('http://localhost:8080/patient_Details', { location, Pname, Page, Pcondition, Pgender });
    //     //   console.log(res.data);

    //     navigate('/myappointment');
    // }
    // catch (e) {
    //     console.log("cannot book appointment at this moment")

    // }
    navigate('/payment');
  

    setValidated(true);
  };

  return (
    <section className={styles.appointment}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className={styles.sectiontitle}>
              <h2>We Are Always Ready to Help You. Book An Appointment</h2>
              <img src="http://127.0.0.1:5501/img/section-img.png" alt="#"/>
                <p>Health is a state of body. Wellness is a state of being.</p>
            </div>
          </div>
        </div>
        </div>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className={styles.form}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              ref={name}
              placeholder="First name"
              defaultValue="Mark"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Age</Form.Label>
            <Form.Control
              required
              ref={age}
              type="text"
              placeholder="Age"
              
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" ref={city} required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required ref={state} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required ref={zipcode} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Gender</Form.Label>
            <Form.Control type="text" placeholder="Gender" required ref={gender} />
            <Form.Control.Feedback type="invalid">
              Please provide a your gender.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Condition</Form.Label>
            <Form.Control type="text" placeholder="health condition" required ref={condition} />
            <Form.Control.Feedback type="invalid">
              Please provide condition.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </section>
  )
}

export default Appointment