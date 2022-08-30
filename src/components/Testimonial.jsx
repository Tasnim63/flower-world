import React, { useState } from "react";
import SectionHead from "./SectionHead";
import { IoMdQuote } from "react-icons/io";
import Card from "../UI/Card";
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';

import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import { testimonials } from "../data";
export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const { id, name, quote, job, avatar } = testimonials[index];

  const perTestimonialHanddler =() =>{
    setIndex( prev => prev - 1);
    if(index <= 0){
     setIndex(testimonials.length - 1);
    }
  }
  const nextTestimonialHanddler =() =>{
     setIndex( prev => prev + 1);
     if(index >= testimonials.length - 1){
      setIndex(0);
     }
  }
  return (
    <section className="testimonials">
      <div className="container testimonials_container">
        <SectionHead
          icon={<IoMdQuote></IoMdQuote>}
          title="Our Testimonial" className="testimonials_head"
        ></SectionHead>
        <Card className="testimonial">
          <div className="testimonial_avatar">
            <img src={avatar} alt={name} />
          </div>
          <p className="testimonial_quote">{`${quote}`}</p>
          <h5>{name}</h5>
          <small className="testimonial_tittle">{job}</small>
        </Card>
        <div className="testimonial_btn-container">
          <button onClick={perTestimonialHanddler  }  className="testimonial_btn"><BsFillArrowLeftCircleFill></BsFillArrowLeftCircleFill></button>
          <button onClick={nextTestimonialHanddler  } className="testimonial_btn"><BsFillArrowRightCircleFill></BsFillArrowRightCircleFill></button>
        </div>
      </div>
    </section>
  );
}
