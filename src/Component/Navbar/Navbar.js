import React from "react";
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import img from '../../Assests/image.png'; // Adjust path as needed

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='logo-container'>
                <img src={img} alt="Logo" className="logo-img" />
            </div>

            <div className='menu'>
                <div className="menu-icon"></div>
                <div className="menu-icon"></div>
                <div className="menu-icon"></div>
            </div>

            <ul className='navbar-links'>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/services'>Services</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    );
}
