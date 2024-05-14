import React from 'react'
import './About.css'
import technology from '../../image/technology.gif'

const About = () => {
  return (
      <div className='about'>
          <div className="a-left">
              <span>
                  ZIA is a trailblazing EdTech startup dedicated
                  to reshaping the education landscape. Built on principles of innovation, accessibility, and excellence, our mission is to offer a comprehensive learning experience for students of all ages.
              </span>
          </div>
          <div className="a-right">
              <img src={technology} alt="" />
          </div>
      </div>
  )
}

export default About