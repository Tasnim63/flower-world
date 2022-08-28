import React from "react";

import { FaCrown } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import { programs } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import SectionHead from "./SectionHead";
export default function Programs() {
  return (
    <section className="programs">
      <div className="container programs_container">
        <SectionHead
          icon={<FaCrown></FaCrown>}
          title="Our Flowers Program"
        ></SectionHead>
    
      <div className="program_wrapper">
        {programs.map(({ id, icon, title, info, path }) => {
          return (
            <Card className="programs_program" key={id}>
              <span>{icon}</span>
              <h4>{title}</h4>
              <small>{info}</small>
              <Link to={path} className=" btn sm">Learn More <AiFillCaretRight></AiFillCaretRight></Link>
            </Card>
          );
        })}
      </div>
      </div>
    </section>
  );
}
