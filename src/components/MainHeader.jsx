import React from "react";
import bannerpic from "../assets/images/homebannerimage.png";
import { Link } from "react-router-dom";
export default function MainHeader() {
  return (
    <header className="main_header">
      <div className="container main_header-container">
        <div className="main_header-left">
          <h2
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            data-aos-duration="1500"
          >
            SURPRISE
          </h2>
          <h1  
          data-aos="fade-up"
          data-aos-anchor-placement="center-center"
          data-aos-duration="2000"
          >Your better half</h1>
          <p>
            A flower is a stem of a plant that has one or more flowers on it and
            has been picked, usually with others, for example to give as a
            present or to put in a.the characteristic reproductive structure of
            angiosperms. As popularly used, the term “flower” especially applies
            when part or all of th
          </p>
          <Link className=" btn lg" to="/flowers">
            Get Started
          </Link>
        </div>
        <div className="main_header-right">
          <div className="main-header-circle"></div>
          <div className="main_header-image">
            <img
              src={bannerpic}
              alt="flowers photo"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
