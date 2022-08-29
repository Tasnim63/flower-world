import React from "react";
import Header from "../../components/Header";
import "./contact.css";
import contactBanner from "../../assets/images/contact banner.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
export default function Contact() {
  return (
    <>
      <Header title="Get In Touch" image={contactBanner}>
        What is a flower explain? Image result for flower A flower is a
        seed-bearing part of a plant, consisting of reproductive organs (stamens
        and carpels) that are
      </Header>
      <section className="contact">
        <div className="container contact_container">
          <div className="contact_wrapper">
            <a href="#" rel="noreferrer" target="_blank">
              <AiOutlineMail></AiOutlineMail>
            </a>
            <a href="#" rel="noreferrer" target="_blank">
              <BsMessenger></BsMessenger>
            </a>
            <a href="#" rel="noreferrer" target="_blank">
              <AiFillInstagram></AiFillInstagram>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
