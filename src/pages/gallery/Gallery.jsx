import React from "react";
import Header from "../../components/Header";
import fowres1 from '../../assets/images/flower1.jpg';
import fowres2 from '../../assets/images/flower2.jpg';
import fowres3 from '../../assets/images/flower3.jpg';
import fowres4 from '../../assets/images/flower4.jpg';
import fowres5 from '../../assets/images/flower5.jpg';
import fowres6 from '../../assets/images/flower6.jpg';
import galleryImage from "../../assets/images/hero-bg.jpg";
import "./gallery.css";
export default function Gallery() {
  return (
    <>
      <Header title="Our Flowers Gallery" image={galleryImage}>
        A flower is a stem of a plant that has one or more flowers on it and has
        been picked, usually with others, for example to give as a present or to
        put in a.the characteristic reproductive structure of angiosperms. As
        popularly used, the term “flower” especially applies when part or all of
        th
      </Header>
      <section className="gallery">
         <div className="container gallery_container">
            <article>
              <img src={fowres1} alt="gallery images" />
            </article>
            <article>
              <img  src={fowres2}  alt="gallery images" />
            </article>
            <article>
              <img src={fowres3} alt="gallery images" />
            </article>
           
            <article>
              <img src={fowres4}alt="gallery images" />
            </article>
            <article>
              <img src={fowres5} alt="gallery images" />
            </article>
            <article>
              <img src={fowres6} alt="gallery images" />
            </article>
           
         </div>
      </section>
    </>
  );
}
