import React from 'react'
import "./Box.css"

const Box = ({icon, title, description}) => {
  return (
   
      <div className="ourvalue_box">
          <div className="ourvalue_box_logo_circle">
          {icon}
          </div>
          <div className='ourvalue_box_text'>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
    
  )
}

export default Box