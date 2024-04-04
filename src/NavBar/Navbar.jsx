import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css"
const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                 <Link to="/">Home</Link>
                </li>
            <li>
            <Link to="/About">About</Link>
                </li>
            <li>
            <Link to="/Blog">Blog</Link>
                </li>
            <li>
            <Link to="/Contact">Contact</Link>
                </li>
            
        </ul>
    </nav>
  )
}

export default Navbar
