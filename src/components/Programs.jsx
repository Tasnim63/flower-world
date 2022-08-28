import React from 'react'
import Section_head from './Section_head'
import {FaCrown } from "react-icons/fa";
import { programs } from '../data';
import Card from '../UI/Card';
export default function Programs() {
  return (
   <section className='programs'>
      <div className="container programs_container">
      <Section_head icon={<FaCrown></FaCrown>} tittle="Our Flowers Program"></Section_head>
      </div>
      <div className="program_wrapper">
        {
            programs.map(({id,icon,tittle,info,path}) =>{
                return (
                  <Card className="programs_program" key={id}>
<span>{icon}</span>
<h4>{tittle}</h4>
<small>{info}</small>
                  </Card>  
                )
            })
        }
      </div>
   </section>
  )
}
