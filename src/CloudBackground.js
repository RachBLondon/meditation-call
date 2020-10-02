
import React, { useState, useEffect } from 'react'
import './App.css'
import Cloud from './components/Cloud'
import 'react-phone-input-2/lib/style.css'

function getWindowDimensions () {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

function App (props) {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )
  const [numberOfClouds, setNumberOfClouds] = useState([])

  useEffect(() => {
    const num = Math.round(windowDimensions.width / 13)
    const lengthArr = Array.from(Array(num).keys())
    const cloudArr = lengthArr.map(cloud => ({
      top: Math.floor(Math.random() * windowDimensions.height),
      left: Math.floor(Math.random() * (windowDimensions.width - 159))
    }))
    setNumberOfClouds(cloudArr)
  }, [])

  useEffect(() => {
    function handleResize () {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='App'>
      {numberOfClouds.map((item, i) => {
        return (
          <Cloud
            key={i}
            top={item.top}
            left={item.left}
            opacity={item % 4 ? 1 : ()=>(Math.random())}
          />
        )
      })}
        {props.children}
    </div>
  )
}

export default App
