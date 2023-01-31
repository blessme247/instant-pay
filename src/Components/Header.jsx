import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Header = () => {
  return (
    <header className='header'>
        <ul className='nav-links'>
            <Link className='header-link' to="/">Payment</Link>
            <Link className='header-link' to="/plans">Plans</Link>
        </ul>
    </header>
  )
}

export default Header