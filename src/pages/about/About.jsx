import React from "react";
import "./about.css";

import aboutImage from "../../assets/images/about banner.jpg";
import Header from "../../components/Header";
export default function About() {
  return (
    <>
    <Header title="about us" image={aboutImage}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia magnam sapiente ab deleniti esse at, porro perferendis officiis illo unde perspiciatis quasi quam hic quas debitis. Iste expedita quam dicta.
    </Header>
    </>
  );
}
