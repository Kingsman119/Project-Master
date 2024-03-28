import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <>
      <div className="navbar">
        <NavLink to='/' id='nav'>Home</NavLink>
        <NavLink to='/features' id='nav'>Features</NavLink>
        <NavLink to='/about' id='nav'>About</NavLink>
        <NavLink to='/menu' id='nav'>Menu</NavLink>
        <NavLink to='/' id='nav'>
          <img src="src/images/LOGO.png" alt="imag" id='Navimg' />
        </NavLink>
        <NavLink to='/offer' id='nav'>Offer</NavLink>
        <NavLink to='/chef' id='nav'>Chef</NavLink>
        <NavLink to='/review' id='nav'>Review</NavLink>
        <NavLink to='/blog' id='nav'>Blog</NavLink>
      </div>
    </>
  )
}

export default Navbar
