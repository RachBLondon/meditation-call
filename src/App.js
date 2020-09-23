import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import Cloud from './components/Cloud'

function getWindowDimensions () {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

function App () {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )
  const [numberOfClouds, setNumberOfClouds] = useState([])

  useEffect(()=>{
    const num = Math.round(windowDimensions.width / 13)
    console.log(Math.round(num))
    const lengthArr = Array.from(Array((num)).keys())
    console.log(lengthArr)
    setNumberOfClouds(Array.from(Array((num)).keys()))
  },[windowDimensions])

  useEffect(() => {
    function handleResize () {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='App'>
      {numberOfClouds.map(item => {
        console.log('hi')
        return (
          <Cloud
            key={item}
            top={Math.floor(Math.random() * windowDimensions.height)}
            left={Math.floor(Math.random() * (windowDimensions.width - 159))}
            opacity={item % 4 ? 1 : Math.random()}
          />
        )
      })}
      <h1 className='title'>Zen Caller</h1>
    </div>
  )
}

export default App
