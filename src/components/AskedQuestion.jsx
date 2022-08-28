import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
export default function AskedQuestion({ question, answer }) {
    const [isAnswerShowing,setIsAnswerShowing]=useState(false);
  return (
    <article onClick={() => setIsAnswerShowing(prev => !prev)}  className="faq">
      <div>
        <h3>{question}</h3>
        <button className="faq_icon">
         {isAnswerShowing ?  <AiOutlineMinus></AiOutlineMinus> :   <AiOutlinePlus></AiOutlinePlus>}
        </button>
      </div>
     { isAnswerShowing &&  <p>{answer}</p>}
    </article>
  );
}
