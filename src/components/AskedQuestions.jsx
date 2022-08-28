import React from "react";
import { FaQuestion } from "react-icons/fa";
import { faqs } from "../data";
import AskedQuestion from "./AskedQuestion";
import SectionHead from "./SectionHead";
export default function AskedQuestions() {
  return (
    <section className="faqs">
      <div className="container faqs_container">
        <SectionHead icon={<FaQuestion></FaQuestion>} title="Flowers FAQS">  </SectionHead>
          <div className="faqs_wrapper">
            {faqs.map(({ id, question, answer }) => { 
              return (
                <AskedQuestion
                  key={id}
                  question={question}
                  answer={answer}
                >
                     <span>{question}</span>
             
                </AskedQuestion>
              );
            })}
          </div>
      
      </div>
    </section>
  );
}
