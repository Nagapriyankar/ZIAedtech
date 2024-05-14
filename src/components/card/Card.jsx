import React from 'react'
import './Card.css'

const Card = ({image, head, details}) => {
  return (
      <div className='card'>
          <img src={image} alt="" />
          <span>{head}</span>
          <span>{details}</span>
    </div>
  )
}

export default Card