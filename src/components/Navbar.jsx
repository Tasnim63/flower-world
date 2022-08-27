import React, { useState } from 'react';
import { FaStream } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, NavLink } from "react-router-dom";
import { links } from '../data';
import './navbar.css';
export default function Navbar() {
    const [isNavShowing , setIsNavShowing ] =useState(false);
  return (
  <nav>
    <div className='container nav_container'>
       <Link to="/" className='logo'>
        <img src="http://zwin.io/html/gazania/assets/img/logo.png" alt="Nav logo" />
       </Link>
       <ul className={`nav_links ${isNavShowing ?  'show_nav' : 'hide_nav'}`}>
        {
            links.map(({name,path}, index)=>{
                return(
                    <li key={index}>
                        <NavLink to={path} className={({isActive}) =>  isActive ? 'active_nav' : ''} >{name}</NavLink>
                    </li>
                )
            })
        }
       </ul>
       <button onClick={() => setIsNavShowing(!isNavShowing)} className='nav_toggle_btn'>
        
        {
            isNavShowing ? <AiOutlineClose></AiOutlineClose> :    <FaStream></FaStream>
        }
       </button>
    </div>
  </nav>
  )
}
