import React, { useState} from 'react'
import './feedbutton.css'
import feedpic from '../Assets/feed.jpg'
import DogImage from './DogImage';

export const FeedButton = () => {
    var [hunger, setHunger] = useState(0);

    function handleFeed() {
        alert('Fed pet!');
        setHunger(100);
    }
    
    return (
        <div>      
            <button onClick={handleFeed} className='button'>
                <img src={feedpic} alt='Feed img' className='pizza' style={{verticalAlign: 'center'}}/>
            </button>
            <DogImage hungerValue={hunger}/>
            Hunger = {hunger}
        </div>
  )
  
}

export var hunger;

