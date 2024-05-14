import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
      <div className='n-wrapper'>
          <div className="n-left">
              <div className="n-name">Zia Edtech</div>
              <span>toggle</span>
          </div>
          <div className="n-right">
              <div className="n-list">
                  <ul style={{listStyleType: 'none'}}>
                      <li>Home</li>
                      <li>About</li>
                      <li>Courses</li>
                      <li>Testimonials</li>
                      <li>Contact</li>
                  </ul>
              </div>
              <button className='button n-button'>Contact Us</button>
          </div>
    </div>
  )
}

export default Navbar