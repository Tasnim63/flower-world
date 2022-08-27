import React from 'react';
import { FaStream } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";
import { links } from '../data';
import './navbar.css';
export default function Navbar() {
  return (
  <nav>
    <div className='container nav_container'>
       <Link to="/" className='logo'>
        <img src="https://htmldemo.net/fultala/p2/img/fultala/logo.png" alt="Nav logo" />
       </Link>
       <ul className='nav_links'>
        {
            links.map(({name,path}, inddex)=>{
                return(
                    <li>
                        <NavLink to={path}>{name}</NavLink>
                    </li>
                )
            })
        }
       </ul>
       <button className='nav_toggle_btn'><FaStream></FaStream></button>
    </div>
  </nav>
  )
}
