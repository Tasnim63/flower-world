import React from "react";
import { BsFlower3 } from "react-icons/bs";
import image from "../assets/images/bannnerGirls.png";
import { values } from "../data";
import Card from "../UI/Card";
import SectionHead from "./SectionHead";
export default function Vanlues() {
  return (
    <section className="values">
      <div className="container values_container">
        <div className="values_left">
            <div className="value_image">
            <img src={image} alt="value image" />
            </div>
         
        </div>
        <div className="values_right">
          <SectionHead
            icon={<BsFlower3></BsFlower3>}
            title="Flowers Value"
          ></SectionHead>
          <p>
            Before you select a bouquet, check out the flower meanings from The
            Old Farmer’s Almanac!Before you select a bouquet, check out the
            flower meanings from The Old Farmer’s Almanac!Before you select a
            bouquet, check out the flower meanings from The Old Farmer’s
            Almanac!Before you select a bouquet, check out the flower meanings
            from The Old Farmer’s Almanac!
          </p>
          <div className="value_wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card className="values_value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
