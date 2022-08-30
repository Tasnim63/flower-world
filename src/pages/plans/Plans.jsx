import React from "react";
import Header from "../../components/Header";
import planbanner from "../../assets/images/planbanner.jpg";
import { plans } from "../../data";
import Card from "../../UI/Card";
import './plans.css'
export default function Plans() {
  return (
    <>
      <Header className="plan_banner" title="Our Flowers Plans Package" image={planbanner}>
        What is a flower explain? Image result for flower A flower is a
        seed-bearing part of a plant, consisting of reproductive organs (stamens
        and carpels) that are typically surrounded by a brightly coloured
        corolla (petals) and a green calyx (sepals). Flowers are attractive and
        appear in different colours and shapes to attract pollinators who help
        in pollen transfer.
      </Header>
      <section className="plans">
        <div className="container plans_container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h4>features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg">
                       choose Plan
                </button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
}
