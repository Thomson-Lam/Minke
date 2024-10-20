import React from 'react'

const DogImage = ({hungerValue}) => {
    var dog_img;

    if ({hungerValue} > 50) {
        dog_img = <img src='sad_dog.png' alt='sad_dog.png' />
    } else {
        dog_img = <img src='happy_dog.png' alt='sad_dog.png' />
    }

    return (
    <div className='dog'>
          {dog_img}
          Hunger = {hungerValue}
    </div>
    )
}

export default DogImage