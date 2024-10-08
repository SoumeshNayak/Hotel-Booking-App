import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navcontainer">
        <span className='logo'>UN_BOOKING</span>
        <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
