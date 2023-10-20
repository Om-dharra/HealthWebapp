import React, { Fragment } from 'react'
import MainNavigation from './Components/mainNavigation/MainNavigation'
import {Routes,Route} from 'react-router-dom'
import Home_page from './Components/pages/Home_page'
import About from './Components/pages/About'
import Bookings from './Components/pages/Bookings'
import Login from './Components/login/Login'
import Appointment from './Components/pages/Appointment'
import Feedbackform from './Components/feedback/Feedbackform'


import 'bootstrap/dist/css/bootstrap.min.css';
import MyAppointment from './Components/myappointment/MyAppointment'
import Register from './Components/Register/Register'
import Resource from './Components/resources/Resource'
import UpdateComp from './Components/resources/UpdateComp'
const App = () => {
  return (
    <Fragment>
      <MainNavigation/>
      <main>
        <Routes>
          <Route path='/' element={<Home_page/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/bookings' element={<Bookings/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/appointment' element={<Appointment/>}/>
          <Route path='/myappointment' element={<MyAppointment/>}/>
          <Route path='/feedback' element={<Feedbackform/>}/>
          <Route path='/signup' element={<Register/>}/>
          <Route path='/resources' element={<Resource/>}/>
          <Route path='/useres' element={<UpdateComp/>}/>
          
        </Routes>
      </main>
    </Fragment>
  )
}

export default App