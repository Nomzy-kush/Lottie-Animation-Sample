import React from 'react'
import LottieDemo from './components/LottieDemo'
import './App.css'
import CustomizedLottie from './components/CustomizedLottie'

const App = () => {
  return (
    <div className='lotties'>
      <LottieDemo />
      <CustomizedLottie />
    </div>
  )
}

export default App