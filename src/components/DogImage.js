import React from 'react'
import sad_dog from '../Assets/sad_dog.png'
import happy_dog from '../Assets/happy_dog.png'

const DogImage = ({hungerValue}) => {
    return (
        <div style={{textAlign: 'center'}}>
            <div id='container'>
                { hungerValue < 50 ? <img src={sad_dog} alt='sad_dog.png' class='dog'/> : 
                <img src={happy_dog} alt='happy_dog.png' class='dog'/>}
            </div>
            <br />
        </div>
    )
}

export default DogImage