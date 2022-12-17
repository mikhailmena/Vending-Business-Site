import React from 'react'
import Content from '../assets/content'
import "../CssFiles/about.css"
const About = () => {
  return (
    <div>
        <h1>About</h1>
    <div className='aboutdiv'>
      <p>{Content.About}</p>
    </div>
    </div>
  )
}

export default About
