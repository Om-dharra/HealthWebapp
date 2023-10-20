import React, { useRef } from 'react'
import styles from './UpdateComp.module.css'

const UpdateComp = () => {
    
    let p1 = 0;
    let s1 = 0;
    
    function b1Handler() {
        s1 += 1;
        p1.current.value = s1;
    }
    function b2Handler() {

        s1 -= 1;
        p1.current.value = s1;

    }
    function bt1Handler() {
        s1 = 0;
        p1.current.value = s1;
    }
   
    let p2 = useRef();
    let s2 = useRef();
    function b3Handler() {
        s2 += 1;
        p2.current.value = s2;
    }

    function b4Handler() {

        s2 -= 1;
        p2.current.value = s2;

    }
    function bt2Handler() {
        s2 = 0;
        p2.current.value = s2;
    }
    
    let p3 = useRef()
    let s3 =useRef()
    function b5Handler() {
        s3 += 1;
        p3.current.value = s3;
    }

    function b6Handler() {

        s3 -= 1;
        p3.current.value = s3;

    }
    function bt3Handler() {
        s3 = 0;
        p3.current.value = s3;
    }
    
    let p4 = useRef();
    let s4 = useRef();
    function b7Handler() {
        s4 += 1;
        p4.current.value = s4;
    };
    function b8Handler() {
        if (s4 > 0) {
            s4 -= 1;
            p4.current.value = s4;
        }
    };
    function bt4Handler () {
        s4 = 0;
        p4.current.value = s4;
    }
    
    let p5 =useRef(); 
    let s5 =useRef(); 
    function b9Handler () {
        s5 += 1;
        p5.current.value = s5;
    };

    function b10Handler () {
        if (s5 > 0) {
            s5 -= 1;
            p5.current.value = s5;
        }
    };
    function bt5Handler(){
        s5 = 0;
        p5.current.value = s5;
    }

    let p6 = useRef();
    let s6 = useRef();
    function b11Handler () {
        s6 += 1;
        p6.current.value = s6;
    };
    function b12Handler () {

        s6 -= 1;
        p6.current.value = s6;

    };
    function bt6Handler () {
        s6 = 0;
        p6.current.value = s6;
    }

    let p7 = useRef();
    let s7 =useRef();
    function b13Handler () {
        s7 += 1;
        p7.current.value = s7;
    };
    function b14Handler() {

        s7 -= 1;
        p7.current.value = s7;

    };
    function bt7Handler () {
        s7 = 0;
        p7.current.value = s7;
    }

  return (

      <div className={styles.container}>

          <h1>Track the use of resources here</h1>
          <h2>Beds</h2>
          <p id="sc1">0</p>
          <span><button type="button" class="btn btn-success btn-lg" onClick={b1Handler} id="1">A patient has been discharged.</button></span>
          <span><button type="button" class="btn btn-danger btn-lg" onClick={b2Handler} id="2">A patient has been admitted</button></span>
          <span><button type="button" class="btn btn-primary btn"  onClick={bt1Handler} id="w1">Submit</button></span>
          <h2>Oxygen Cylinder</h2>
          <p  id="sc2">0</p>
          <span><button type="button" class="btn btn-success btn-lg" onClick={b3Handler} id="3">Add an oxygen cyllinder to the stock</button></span>
          <span><button type="button" class="btn btn-danger btn-lg" onClick={b4Handler} id="4">Use an oxygen cyllinder</button></span>
          <span><button type="button" class="btn btn-primary btn" onClick={bt2Handler} id="w2">Submit</button></span>
          <h1 class="med">Medicines</h1>
          <h2>Painkillers</h2>
          <p id="sc3">0</p>
          <span><button type="button" class="btn btn-success btn-lg" onClick={b5Handler} id="5">Add a painkiller to the stock</button></span>
          <span><button type="button" class="btn btn-danger btn-lg" onClick={b6Handler} id="6">Use a painkiller</button></span>
          <span><button type="button" class="btn btn-primary btn" onClick={bt3Handler} id="w3">Submit</button></span>
          <h2>Antibiotics</h2>
          <p id="sc4">0</p>
          <span><button type="button" class="btn btn-success btn-lg" onClick={b7Handler} id="7">Add an antibiotic to the stock</button></span>
          <span><button type="button" class="btn btn-danger btn-lg" onClick={b8Handler} id="8">Use an antibiotic</button></span>
          <span><button type="button" class="btn btn-primary btn" onClick={bt4Handler} id="w4">Submit</button></span>
          <h2>First AonClick={} id Supplies</h2>
          <p id="sc5">0</p>
          <span><button type="button" class="btn btn-success btn-lg" onClick={b9Handler} id="9">Add a first aonClick={} id supply to the stock</button></span>
          <span><button type="button" class="btn btn-danger btn-lg" onClick={b10Handler} id="10">Use a first aonClick={} id supply</button></span>
          <span><button type="button" class="btn btn-primary btn" onClick={bt5Handler} id="w5">Submit</button></span>
          <h2>Cardiovascular Medicines</h2>
          <p  id="sc6">0</p>
          <span><button type="button" class="btn btn-success btn-lg" onClick={b11Handler} id="11">Add a cardiovascular medicine to the stock</button></span>
          <span><button type="button" class="btn btn-danger btn-lg" onClick={b12Handler} id="12">Use a cardiovascular medicine</button></span>
          <span><button type="button" class="btn btn-primary btn" onClick={bt6Handler} id="w6">Submit</button></span>
          <h2>Blood Thinners</h2>
          <p  id="sc7">0</p>
          <span><button type="button" class="btn btn-success btn-lg" onClick={b13Handler} id="13">Add a blood thinner to the stock</button></span>
          <span><button type="button" class="btn btn-danger btn-lg" onClick={b14Handler} id="14">Use a blood thinner</button></span>
          <span><button type="button" class="btn btn-primary btn" onClick={bt7Handler} id="w7">Submit</button></span>

      </div>
  )
}

export default UpdateComp