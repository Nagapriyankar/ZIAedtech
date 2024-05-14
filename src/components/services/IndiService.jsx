import React from 'react'
import './IndiService.css'

const IndiService = ({img, text, ptag}) => {
  return (
      <div className="serv">
          <img src={img} alt={text} style={{width:"10rem", height:"10rem"}} />
          <span>{text}</span>
          <span>{ptag}</span>
      </div>
      
  )
}

export default IndiService