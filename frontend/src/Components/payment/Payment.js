import React from 'react'
import './Payment.module.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    let navigate=useNavigate();
    function btnHandler(){
        navigate('/');

    }
  return (
    <div>
        <h1>Payment Page</h1>
          <main>
              <h2>Payment Information</h2>
              <h3>Total amount to be paid (in rupees): 250</h3>

              <div className="container mt-5">
                  <button type="submit" className="btn btn-primary" onClick={btnHandler}>
                      Pay Offline
                  </button>
              </div>

              <div className="container mt-5">
                  <div className="dropdown">
                      <DropdownButton id="dropdown-item-button" title="Credit/Debit Card">
                          <Dropdown.ItemText><div className="form-group">
                              <label htmlFor="card-number">Card Number</label>
                              <input
                                  type="text"
                                  className="form-control"
                                  id="card-number"
                                  placeholder="Enter card number"
                              />
                          </div></Dropdown.ItemText>
                          <Dropdown.Item as="button"><div className="form-group">
                              <label htmlFor="card-holder-name">Cardholder Name</label>
                              <input
                                  type="text"
                                  className="form-control"
                                  id="card-holder-name"
                                  placeholder="Enter cardholder name"
                              />
                          </div></Dropdown.Item>
                          <Dropdown.Item as="button"><div className="form-group col-md-6">
                              <label htmlFor="expiry-date">Expiry Date</label>
                              <input
                                  type="text"
                                  className="form-control"
                                  id="expiry-date"
                                  placeholder="MM/YY"
                              />
                          </div></Dropdown.Item>
                          <Dropdown.Item as="button"><div className="form-group col-md-6">
                              <label htmlFor="cvv">CVV</label>
                              <input
                                  type="text"
                                  className="form-control"
                                  id="cvv"
                                  placeholder="CVV"
                              />
                          </div></Dropdown.Item>
                          <Dropdown.Item as="button"><div className="form-group col-md-6">

                              <button type="submit" className="btn btn-success" onClick={btnHandler}>
                                  Submit Payment
                              </button>
                          </div></Dropdown.Item>
                      </DropdownButton>


                  </div>
              </div>

              <div className="container mt-5">
                  <div className="dropdown">
                      <DropdownButton id="dropdown-item-button" title="Pay via UPI">
                          <Dropdown.ItemText><div className="form-group">
                              <label htmlFor="UPI">UPI ID</label>
                              <input
                                  type="text"
                                  className="form-control"
                                  id="UPI"
                                  placeholder="Enter your UPI ID"
                              />
                          </div></Dropdown.ItemText>
                          <Dropdown.Item as="button"> <button type="submit" className="btn btn-success" onClick={btnHandler}>
                              Submit Payment
                          </button></Dropdown.Item>

                      </DropdownButton>
                    </div>
                    </div>
                      <br />
                      <br />
                      <h4>*You get a 5% discount if you pay online</h4>
                  </main>
      </div>
  )
}

export default Payment