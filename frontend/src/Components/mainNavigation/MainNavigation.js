import React from 'react'
import Navbar from './Navbar/Navbar'

const MainNavigation = ({setLoginUser}) => {
  return (
    <div>
      <Navbar setLoginUser={setLoginUser}/>
    </div>
    
  )
}

export default MainNavigation