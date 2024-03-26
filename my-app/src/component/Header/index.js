import React from 'react'
import Luxe from "../../assets/Luxe.png";
import navBar from "../../assets/Menu.png";
import "./index.css"

const Header = () => {
    return (
        <nav className='mainnav'>
            <div className='heading'>
                <img src={Luxe} alt='Heading' />
            </div>
            <div className='upperdiv'>
                <ul className='list'>
                    <li>Home</li>
                    <li>Service</li>
                    <li>Portfolio</li>
                    <li>How we work</li>
                </ul>
            </div>
            <div className='navIcon'><img src={navBar} alt='NavBar' /></div>
        </nav>
    )
}
export default Header; 
