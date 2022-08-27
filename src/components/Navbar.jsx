import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css'
export default function Navbar() {
  return (
  <nav>
    <div className='container nav_container'>
       <Link to="/" className='logo'>
        <img src="https://htmldemo.net/fultala/p2/img/fultala/logo.png" alt="Nav logo" />
       </Link>
    </div>
  </nav>
  )
}
