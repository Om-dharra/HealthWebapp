import React from 'react'
import Navbar from './Navbar/Navbar'

const MainNavigation = ({user, setLoginUser}) => {
  return (
    <div>
      <Navbar user= {user} setLoginUser={setLoginUser}/>
    </div>
    
  )
}

export default MainNavigation