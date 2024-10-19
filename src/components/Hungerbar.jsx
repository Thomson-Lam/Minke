import "./Bars.css"
import hungerIcon from '../Assets/hungerIcon.png'

import React from 'react'

const hungerbar = () => {
  return (
    <div className = "bigDiv">
      <div className="barContainer">
        <div className="picture">
          <img id = 'icon' src= {hungerIcon} alt = "HungerIcon"></img>
        </div>
        <div className="bar" id="hungerBar"></div>


      </div>
    </div>
  )
}

export default hungerbar
