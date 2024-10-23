import React, { useState} from 'react'
import './feedbutton.css'
import DogImage from './DogImage';

export const FeedButton = () => {
    var [hunger, setHunger] = useState(0);

    function handleFeed() {
        alert('Fed pet!');
        setHunger(100);
    }
    
    return (
        <div style={{textAlign: 'center'}}>      
            <DogImage hungerValue={hunger}/>
            <button onClick={handleFeed} className='button' />
        </div>
  )
  
}

export var hunger;

