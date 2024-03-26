import React from 'react'
import prod from "../../assets/Vector.png"
import design from "../../assets/Ui Design.png";
import mydesign from "../../assets/Product.png";
import './index.css';

const Product = () => {
  return (
    <div className='parents'>
  <div className='myservice'>
    <h1>OUR SERVICE</h1></div>
    <div className='all'>
        <div className='design'>
        <div className='prodimagediv'><img src={prod} alt='prodimage'/></div>
        <div className='prodDiv2'>
            <h5 className='prodHeader'>Branding</h5>
            <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        </div>
        <div className='mydesign'>
        <div className='mydesigndiv'><img src={design} alt=''/></div>
        <div className='designloremdiv'>
            <h5 className='designheader'>UI/UX</h5>
            <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </div>
      <div className='vectordiv'>
        <div className='vectorimagediv'><img src={mydesign} alt='designimage' /></div>
        <div className='vectorlorem'>
            <h5 className='vectorheader'>Product Design</h5>
            <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </div>
        </div>
        </div>
  )
}

export default Product;
