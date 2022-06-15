import React from 'react'
import Lottie from 'react-lottie';
import animationData from '../lotties/107411-macho-man.json';


const options = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      },
    };

const LottieDemo = () => {

  return (
    <div>
        <h1>Lottie</h1>
        <p>A Regular Lottie Animation in a functional React component</p>
        <Lottie
          options={options}
          height={400}
          width={400}
        />
      </div>
  )
}

export default LottieDemo