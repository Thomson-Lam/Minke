import React from 'react'
import sad_dog from '../Assets/sad_dog.png'
import happy_dog from '../Assets/happy_dog.png'

const DogImage = ({hungerValue}) => {
    var dog_img;
//    const [key, setKey] = useState(0);

//    function refresh () {
//         setKey(key + 1);
//    }

//     if ({hungerValue} < 50) {
//         dog_img = <img src={sad_dog} alt='sad_dog.png' />
//     } else {
//         dog_img = <img src={happy_dog} alt='happy_dog.png' />
//     }

    return (
        <div className='dog'>
            { hungerValue < 50 ? <img src={sad_dog} alt='sad_dog.png'/> : <img src={happy_dog} alt='happy_dog.png' />}
            {dog_img}
            <br />
            DogImage hungerValue = {hungerValue}
        </div>
    )
}

export default DogImage