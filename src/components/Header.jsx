import React, { useState } from 'react'
import '../css/Header.css'
import logo from '../assets/logo.svg'
import { FaBell, FaMoon, FaSun } from 'react-icons/fa';

const Header = ({insideDashboard}) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
      setDarkMode(!darkMode);
      document.body.className = darkMode ? 'light' : 'dark'; // for global styling
    };

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-left'>
            <img src={logo} alt=' no img' className='logo-icon' />
        </div>

       {insideDashboard ?
       <ul  className='navbar-right'>
        <span onClick={toggleTheme} className='icon'>
        {darkMode ? <FaSun /> : <FaMoon />}
      </span>
      <span className='icon'>
        <FaBell />
      </span>
      <img
        src='https://i.pravatar.cc/150?img=12' // Replace with your actual image
        alt='profile'
        className='avatar'
      />
   

       </ul>
       :
       <ul className='navbar-right'>
       <li><a href='#'>About us</a></li>
       <li><a href='#'>Contacts</a></li>
       </ul>}
    </nav>
    </>
  )
}

export default Header