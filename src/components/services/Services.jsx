import React from 'react'
import './Services.css'
import IndiService from './IndiService'
import technology from '../../image/technology.gif'



const Services = () => {
  return (
    <div className='s-wrapper'>
      <div className="services">
              <div className="s-head">         
                  <span>ICON</span>             
                  <span>What Zia Offers you!</span>             
              </div>
              <div className="content">
                  <IndiService
                      img={technology}
                      text="Inustrial Experts"
                      ptag="Experienced trainers to give a clear vision towards your goal" />
                  <IndiService
                      img={technology}
                      text="Live Classes"
                      ptag="Live interactive classes in
                      the market based advanced concepts" />
                  <IndiService
                      img={technology}
                      text="Best Projects"
                      ptag="Top Industrial Projects with ​Advanced technologies as practice" />
                  <IndiService
                      img={technology}
                      text="Placement"
                      ptag="Embark on a journey towards career success with our Placement Assistance" />
             </div>
          </div>
      </div>
  )
}

export default Services