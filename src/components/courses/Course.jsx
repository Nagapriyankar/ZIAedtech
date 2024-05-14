import React from 'react'
import './Course.css'
import Card from '../card/Card'
import java from '../../image/java.png'
import python from '../../image/python.png'
import design from '../../image/design.png'
import mern from '../../image/mern.png'

const Course = () => {
  return (
    <div className="courses">
      <div className="c-left">
        <span>Courses</span>
        <span>We provide in-depth technology courses encompassing <br />hands-on projects,personalized portfolio development, <br />and professional placement support.</span>
      </div>
      <div className="blur"></div>
      <div className="c-right">
        <div style={{ left: "10rem" }}>
          <Card
            image={java}
            head={'CORE JAVA'}
            details={'ur EdTech platform leverages Java capabilities to cultivate an interactive and adaptive learning environment, driving forward innovation and engagement in education'}
          />
        </div>
        <div style={{ left: "-11rem", top: "10rem" }}>
          <Card
            image={python}
            head={'PYTHON FULL STACK'}
            details={'Experience you as a coding novice, ​a data enthusiast, or an aspiring AI ​developer, our Python-powered ​EdTech platform is here to elevate ​your learning journey.'}
          />
        </div>
        <div style={{ left: "7rem", top: "20rem" }}>
          <Card
            image={design}
            head={'MECHANICAL DESIGN'}
            details={'With proficiency in leading design software such as SOLIDWORKS, CATIA V5, UNIGRAPHICS, as well as specialization in BIW and Plastic Trims, we deliver unparalleled excellence in mechanical design'}
          />
        </div>
        <div className="blur c-blur"></div>

        <div style={{ left: "28rem", top: "10rem" }}>
          <Card
            image={mern}
            head={'MERN FULL STACK'}
            details={'Our platform harnesses the full potential of MERN (MongoDB, Express.js, React, Node.js) to deliver an interactive and dynamic web experience, paving the way for innovative and engaging solutions in the digital realm'}
          />
        </div>

      </div>
    </div>
  )
}

export default Course