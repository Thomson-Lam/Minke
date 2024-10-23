import React from 'react'
import Hungerbar  from './Hungerbar'
import Attentionbar from './Attentionbar'
import Thirstbar from './Thirstbar'
import './Bars.css'


const Bar = () => {
  
  return (
    <div>
      <div className="Bar-Container">
          <Hungerbar />
          <Thirstbar  />
          <Attentionbar/>
    


          




        
      </div>
    </div>
  )
}

export default Bar;
