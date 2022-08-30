import React, { useState } from 'react';
import { FaStream } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, NavLink } from "react-router-dom";
import { links } from '../data';
import './navbar.css';
import navlogo from '../assets/images/footer-logo (1).png'
export default function Navbar() {
    const [isNavShowing , setIsNavShowing ] =useState(false);
  return (
  <nav>
    <div className='container nav_container'>
       <Link onClick={() => setIsNavShowing(false) } to="/" className='logo'>
        <img src={navlogo} alt="Nav logo" />
       </Link>
       <ul className={`nav_links ${isNavShowing ?  'show_nav' : 'hide_nav'}`}>
        {
            links.map(({name,path}, index)=>{
                return(
                    <li key={index}>
                        <NavLink to={path} className={({isActive}) =>  isActive ? 'active_nav' : ''}  onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                    </li>
                )
            })
        }
       </ul>
       <button onClick={() => setIsNavShowing(prev => !prev)} className='nav_toggle_btn'>
        
        {
            isNavShowing ? <AiOutlineClose></AiOutlineClose> :    <FaStream></FaStream>
        }
       </button>
    </div>
  </nav>
  )
}
