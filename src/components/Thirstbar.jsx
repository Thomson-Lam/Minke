import React from 'react'
import thirstIcon from '../Assets/thirstIcon.png'
import "./Bars.css"

const Thirstbar = () => {
  return (
    <div className='bigDiv'>
      <div className="barContainer">
        <div className="picture">
          <img id = 'icon' src= {thirstIcon} alt = "HungerIcon"></img>
        </div>
        <div className="bar" id="thirstBar"></div>
      </div>
    </div>
  )
}

export default Thirstbar
