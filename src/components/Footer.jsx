import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Link } from "react-router-dom";
import footerlogo from '../assets/images/footer-logo (1).png'
export default function Footer() {
  return (
   <footer>
  
    <div className="container footer_container">
      <article>
     <Link to="/" className='logo'>
        <img src={footerlogo} alt="footer logo" />
     </Link>
     <p>A flower is a stem of a plant that has one or more flowers on it and has been picked, usually with others, for example to give as a present or to put in a.</p>
     <div className="footer_social">
        <a href="#" target="_blank" rel='noreferrer noopener'>
            <AiFillLinkedin></AiFillLinkedin></a>
        <a href="#" target="_blank" rel='noreferrer noopener'>
       < AiFillFacebook></AiFillFacebook></a>
        <a href="#" target="_blank" rel='noreferrer noopener'>
            <AiFillGithub></AiFillGithub></a>
     </div>
      </article>
      <article>
        <h4>Permalinks</h4>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/flowers">Flowers</Link>
      </article>
      <article>
        <h4>Permalinks</h4>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/flowers">Flowers</Link>
      </article>
      <article>
        <h4>Permalinks</h4>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/plans">Plans</Link>
        <Link to="/flowers">Flowers</Link>
      </article>
    </div>
    <div className="footer_copyright">
      <small>2022 design by Tamanna & copy ; ALL Right Reserved</small> 
    </div>
   </footer>
  )
}
