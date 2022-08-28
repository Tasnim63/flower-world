import React from "react";
import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Vanlues from "../../components/Vanlues";

import "./home.css";

import AskedQuestions from "../../components/AskedQuestions";
import Testimonial from "../../components/Testimonial";
export default function Home() {
  return (
    <>
      <MainHeader></MainHeader>
      <Programs></Programs>
      <Vanlues></Vanlues>
      <AskedQuestions></AskedQuestions>
      <Testimonial></Testimonial>
    </>
  );
}
