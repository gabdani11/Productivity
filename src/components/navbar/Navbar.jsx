import React from 'react'
import Logo from '../../assets/icons/logo.webp'
import './navbar.scss'

const Navbar = () => {
  return (
    <header>
        <nav className='navbar'>
            <img src={Logo} alt="logo" />
            <ol className='nav-links'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Pomodoro</a></li>
                <li><a href="#">Schedule</a></li>
                <li><a href="#">To-do list</a></li>
                <div className="anchor"></div>
            </ol>
            <div className="theme-btn">
                <div className="theme-ball"></div>

            </div>

        </nav>
    </header>
  )
}

export default Navbar