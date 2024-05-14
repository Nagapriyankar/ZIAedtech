import React from 'react'
import './Intro.css'
import gmail from '../../image/gmail.png'
import instagram from '../../image/instagram.png'
import linkedin from '../../image/linkedin.png'
import specialoffer from '../../image/specialoffer.png'

const Intro = () => {
  return (
      <div className="intro">
          <div className="i-left">
              <div className="i-name">
                  <span>ZIA</span>
                  <span>ZIA EDUCATION TECHNOLOGY</span>
                  <span>One liner - Lorem ipsum dolor sit, amet consectetur consectetur</span>
              </div> 
              <div className="icons">
                  <a href="">
                      <img src={gmail} alt="gmail" style={{ width: '50px', height: '50px' }} />
                  </a>
                  <a href="">
                      <img src={instagram} alt="instagram" style={{ width: '40px', height: '40px' }} />
                  </a>
                  <a href="">
                      <img src={linkedin} alt="linkedin" style={{ width: '40px', height: '40px' }} />
                  </a>
              </div>
              <div className="blur"></div>
          </div>
          <div className="i-right">
              <img src={specialoffer} alt="specialoffer" />
              <button className='button i-button'>Register Now</button>
              <div className='i-deadline'>
                  <p>Offer valid till - date here</p>
                  <p>Hurry up, Limited Seats only available</p></div>
              
          </div>
          {/* blur divs */}
          
    </div>
  )
}

export default Intro