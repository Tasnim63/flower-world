import React from "react";
import "./about.css";
import storyImage from '../../assets/images/flower-banner.png';
import visionImage from '../../assets/images/flower6.jpg';

import aboutImage from "../../assets/images/story-flowers.png";
import Header from "../../components/Header";
export default function About() {
  return (
    <>
      <Header title="about us" image={aboutImage}>
        What is a flower explain? Image result for flower A flower is a
        seed-bearing part of a plant, consisting of reproductive organs (stamens
        and carpels) that are typically surrounded by a brightly
      </Header>
      <section className="about_Vision">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img
             src={visionImage}
              alt="story photos"
            />
          </div>
          <div className="about-section-content">
            <h1>Our Story</h1>
            <p>
              {" "}
              What is a flower explain? Image result for flower A flower is a
              seed-bearing part of a plant, consisting of reproductive organs
              (stamens and carpels) that are typically surrounded by a brightly
              coloured corolla (petals) and a green calyx (sepals). Flowers are
              attractive and appear in different colours and shapes to attract
              pollinators who help in pollen transfer.
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
              What is a flower explain? Image result for flower A flower is a
              seed-bearing part of a plant, consisting of reproductive organs
              (stamens and carpels) that are typically surrounded by a brightly
              coloured corolla (petals) and a green calyx (sepals). Flowers are
              attractive and appear in different colours and shapes to attract
              pollinators who help in pollen transfer.
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
              src={storyImage}
              alt="vision photos"
            />
          </div>
        </div>
      </section>
      <section className="about_Mission">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img
                 src={visionImage}
              alt="mission photos"
            />
          </div>
          <div className="about-section-content">
            <h1>Our Mission</h1>
            <p>
              {" "}
              What is a flower explain? Image result for flower A flower is a
              seed-bearing part of a plant, consisting of reproductive organs
              (stamens and carpels) that are typically surrounded by a brightly
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
