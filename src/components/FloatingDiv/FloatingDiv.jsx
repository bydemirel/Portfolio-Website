import React from 'react'
import './FloatingDiv.css'

const FloatingDiv = ({image,text1,text2}) => {
  return (
      <div className="floatingdiv">
          <img src={image} alt="" />
          <h3>
          {text1}
          <br />
          {text2}
          </h3>
      </div>
  )
}

export default FloatingDiv