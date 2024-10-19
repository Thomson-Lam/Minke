import React, { useState} from 'react'
import './feedbutton.css'
import feedpic from './feed.jpg'

export const FeedButton = () => {
    var [hunger, setHunger] = useState(0);

    function handleFeed() {
        alert('Fed pet! ');
        setHunger(100);
    }
    
    return (
        <div>
            <button onClick={handleFeed} className='button'>
                <img src={feedpic} alt='Feed img' className='pizza' style={{verticalAlign: 'center', border: 40}}/>
            </button>
            <br />
            <br />
                Hunger = { hunger }
        </div>
  )
  
}

export var hunger;

