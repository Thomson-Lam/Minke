import React from 'react'
import attentionIcon from '../Assets/attention-icon-2016x2048-slyd2769.png'
import "./Bars.css"

const Thirstbar = () => {
  return (
    <div className='bigDiv'>
      <div className="barContainer">
        <div className="picture">
          <img id="icon" src={attentionIcon} alt="HungerIcon"></img>
        </div>
        <div className="bar" id="attentionBar"></div>
      </div>
    </div>
  )
}

export default Thirstbar
