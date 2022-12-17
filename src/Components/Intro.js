import React from 'react'
import '../CssFiles/Intro.css'
import title from '../assets/Title.svg'

const Intro = () => {
  return (
    <div className='introDiv '>
        
      
      {/* <div id='line' style={{ borderTop: "2px solid #0000CD ", marginLeft: 20, marginRight: 20 }}></div> */}

      <p id='paragraph'>Royals Ventures is a company that provides free vending services based in Colorado Springs, Colorado. We provide high-quality vending machines stocked with a wide variety of snacks and drinks to businesses, schools, and other organizations in the Colorado Springs area. Our machines are modern and well-maintained, and we offer competitive prices and customizable options to meet the needs of our customers. We pride ourselves on excellent customer service and are dedicated to providing convenient and satisfying options for our clients. Whether you're looking to provide snacks or drinks for your employees or students, we've got you covered. Contact us today to learn more about our services and how we can help you. </p>
      <button>Contact Me</button>
    </div>
  )
}

export default Intro
