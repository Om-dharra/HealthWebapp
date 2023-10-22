import React, { Fragment, useState } from 'react'
import MainNavigation from './Components/mainNavigation/MainNavigation'
import {Routes,Route} from 'react-router-dom'
import Home_page from './Components/pages/Home_page'
import About from './Components/pages/About'
import Bookings from './Components/pages/Bookings'

import Appointment from './Components/pages/Appointment'
import Feedbackform from './Components/feedback/Feedbackform'



import 'bootstrap/dist/css/bootstrap.min.css';
import MyAppointment from './Components/myappointment/MyAppointment'

import Resource from './Components/resources/Resource'
import UpdateComp from './Components/resources/UpdateComp'
import Register from './Components/Register/Register'
import Login from './Components/login/Login'
import DoctorsSchedule from './Components/doctorsSchedule/DoctorsSchedule'
import Payment from './Components/payment/Payment'
const App = () => {
  const [ user, setLoginUser] = useState({})
  return (
    <Fragment>
      <MainNavigation user={user} setLoginUser={setLoginUser} />
      <main>
        <Routes>
        
          {/* <Route exact path="/">
            {
              user && user._id ? : <Login setLoginUser={setLoginUser} />
            }
          </Route> */}
           <Route path='/' element={<Home_page/>}/>
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
          <Route path="/signup" element={<Register />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/bookings' element={<Bookings/>}/>
          <Route path='/appointment' element={<Appointment/>}/>
          <Route path='/myappointment' element={<MyAppointment/>}/>
          <Route path='/feedback' element={<Feedbackform/>}/>
          <Route path='/resources' element={<Resource/>}/>
          <Route path='/useres' element={<UpdateComp/>}/>
          <Route path='/docAppointment' element={<DoctorsSchedule/>}/>
          <Route path='/payment' element={<Payment/>}/>

        </Routes>
      </main>
    </Fragment>
  )
}

export default App