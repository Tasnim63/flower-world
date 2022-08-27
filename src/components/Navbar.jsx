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
        <img src="http://zwin.io/html/gazania/assets/img/logo.png" alt="Nav logo" />
       </Link>
       <ul className='nav_links'>
        {
            links.map(({name,path}, inddex)=>{
                return(
                    <li>
                        <NavLink to={path} className={({isActive}) =>  isActive ? 'active_nav' : ''} >{name}</NavLink>
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
