import React from 'react'
import '@coreui/coreui/dist/css/coreui.min.css'

import {CCarousel,CCarouselItem,img,CCarouselCaption} from '@coreui/react'
const Carousel_home = () => {
  return (
    <CCarousel controls indicators dark>
      <CCarouselItem>
        <img className="d-block w-100" src="https://github.com/Om-dharra/web-dev/blob/main/slider2.jpg?raw=true" alt="slide 1" height="650px" />
        <CCarouselCaption className="d-none d-md-block" style={{position:'absolute',top:'200px',left:'0px'}}>
          <h5 style={{fontSize:'40px',fontFamily:'cursive'}}>Best Doctors Available</h5>
          <p style={{flexWrap:'wrap'}}>Trust is a vital component of the doctor-patient relationship.<br/> When trust is present, the patient is more likely to adhere to treatment recommendations.</p>
        </CCarouselCaption>
      </CCarouselItem>
      
      <CCarouselItem>
        <img className="d-block w-100" src="https://images.unsplash.com/photo-1587351021355-a479a299d2f9?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="slide 2" height="650px"  />
        
      </CCarouselItem>
      <CCarouselItem>
        <img className="d-block w-100" src="https://github.com/Om-dharra/web-dev/blob/main/video-bg.jpg?raw=true" alt="slide 3" height="650px" />
        <CCarouselCaption className="d-none d-md-block" style={{position:'absolute',top:'200px',left:'20px'}}>
          <h5 style={{fontSize:'40px',fontFamily:'cursive'}}>Advanced Quality Equipements</h5>
          <p>These devices often incorporate the latest technology and materials to ensure precise<br/> diagnostics, treatment, and patient care.</p>
        </CCarouselCaption>
      </CCarouselItem>
    </CCarousel>
  )
}

export default Carousel_home
