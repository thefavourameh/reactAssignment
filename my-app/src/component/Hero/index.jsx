import React from 'react'
import image from "../../assets/image.png"
import button from "../../assets/button.png"
import "./index.css"

const Hero = () => {
  return (
    <div className='hero'>
      <div>
        <div className='myDiv'>
            <p className='hi'>Hi, there!</p>
            <h1 className='luxe'>LUXE IS HERE TO BE YOUR ASSISTANCE</h1>
            <p>I am here ready to help you in making creative digital products</p>
        </div>
        <div className='button'><img src = {button} alt='button'/></div>
        </div>
        <div className='image'><img src={image} alt='myimage'/></div>
    </div>
  )
}

export default Hero
