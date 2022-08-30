import React from 'react';
import {Link} from "react-router-dom";
import './notFound.css';
import notfound from '../../assets/images/5203299.jpg'
export default function NotFound() {
  return (
   <section>
    <div className="container notfound_container">
    <div>
     <h1>
        Page not Found
       </h1>
       <Link to="/" className='btn'>Goback Home</Link>
     </div>
      <img src={notfound} alt="error pictures" />
    
    </div>
   </section>
  )
}
