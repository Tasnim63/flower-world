import React from "react";
import "./about.css";

import aboutImage from "../../assets/images/about banner.jpg";
import Header from "../../components/Header";
export default function About() {
  return (
    <>
      <Header title="about us" image={aboutImage}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam
        sapiente ab deleniti esse at, porro perferendis officiis illo unde
        perspiciatis quasi quam hic quas debitis. Iste expedita quam dicta.
      </Header>
      <section className="about_Vision">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img
              src="http://zwin.io/html/gazania/assets/img/product/2.png"
              alt="story image"
            />
          </div>
          <div className="about-section-content">
            <h1>Our Story</h1>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              magnam sapiente ab deleniti esse at, porro perferendis officiis
              illo unde perspiciatis quasi quam hic quas debitis. Iste expedita
              quam dicta. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit.{" "}
            </p>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              magnam sapiente ab deleniti esse at, porro perferendis officiis
              illo unde perspiciatis quasi quam hic quas debitis. Iste expedita
              quam dicta. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Quia magnam sapiente ab deleniti esse at, porro perferendis
              officiis illo unde perspiciatis quasi quam hic quas debitis. Iste
              expedita quam dicta.
            </p>
          </div>
        </div>
      </section>
      <section className="about_vision">
        <div className="container about-vision-container">
         
          <div className="about-section-content">
            <h1>Our Vision</h1>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              magnam sapiente ab deleniti esse at, porro perferendis officiis
              illo unde perspiciatis quasi quam hic quas debitis.{" "}
            </p>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              magnam sapiente ab deleniti esse at, porro perferendis officiis
              illo unde perspiciatis quasi quam hic quas debitis. Iste expedita
              quam dicta. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit.{" "}
            </p>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              magnam sapiente ab deleniti esse at, porro perferendis officiis
              illo unde perspiciatis quasi quam hic quas debitis. Iste expedita
              quam dicta.
            </p>
          </div>
          <div className="about_section-image">
            <img
              src="http://zwin.io/html/gazania/assets/img/product/1.png"
              alt="vision image"
            />
          </div>
        </div>
      </section>
      <section className="about_Mission">
        <div className="container about_mission-container">
        <div className="about_section-image">
            <img
              src="http://zwin.io/html/gazania/assets/img/slider/home-1/1.jpg"
              alt="mission image"
            />
          </div>
          <div className="about-section-content">
            <h1>Our Mission</h1>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              magnam sapiente ab deleniti esse at, porro perferendis officiis
              illo unde perspiciatis quasi quam hic quas debitis.{" "}
            </p>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              magnam sapiente ab deleniti esse at, porro perferendis officiis
              illo unde perspiciatis quasi quam hic quas debitis. Iste expedita
              quam dicta. Lorem, ipsum dolor sit amet consectetur adipisicing
              elit.{" "}
            </p>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              magnam sapiente ab deleniti esse at, porro perferendis officiis
              illo unde perspiciatis quasi quam hic quas debitis. Iste expedita
              quam dicta.
            </p>
          </div>
         
        </div>
      </section>
    </>
  );
}
