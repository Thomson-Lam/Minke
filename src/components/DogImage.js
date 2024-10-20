import React from 'react'
import sad_dog from '../Assets/sad_dog.png'
import happy_dog from '../Assets/happy_dog.png'

const DogImage = ({hungerValue}) => {
    var dog_img;

    return (
        <div className='dog'>
            { hungerValue < 50 ? <img src={sad_dog} alt='sad_dog.png'/> : <img src={happy_dog} alt='happy_dog.png' />}
            {dog_img}
            <br />
        </div>
    )
}

export default DogImage