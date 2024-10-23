import React, { useState} from 'react'
import './Buttons.css'
import DogImage from './DogImage';

export const Buttons = () => {
    var [hunger, setHunger] = useState(0);
    var [thirst, setThirst] = useState(0);

    function handleFeed() {
        alert('Fed pet!');
        setHunger(100);
    }

    function handleQuench() {
        alert('Quenched pet!');
        setThirst(100);
    }
    
    return (
        <div style={{textAlign: 'center'}}>      
            <DogImage bars={{hungerValue: hunger, thirstValue: thirst}}/>
            <button onClick={handleFeed} className='feedbutton' />
            <button onClick={handleQuench} className='quenchbutton' />
        </div>
  )
  
}

export var hunger;

