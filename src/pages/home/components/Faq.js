import React, { useState } from "react";
import "./styles/Faq.css";
import Entry from "./FaqEntry";

const Faq = ({ linkFaq, faqEntries }) => {
  const [entriesVisibility, setEntriesVisibility] = useState([
    false, // Visibility for entry 1
    false, // Visibility for entry 2
    false, // Visibility for entry 3
    false, // Visibility for entry 4
    false, // Visibility for entry 5
  ]);

  const handleVisibilityChange = (index) => {
    setEntriesVisibility((prevVisibility) => {
      const updatedVisibility = [...prevVisibility];
      updatedVisibility[index] = !updatedVisibility[index];
      return updatedVisibility;
    });
  };

  return (
    <div className="cust-container" id="faq">
      <div className="faq-head" style={{ width: "clamp(20.5rem, 50%, 23rem)" }}>
        <h3 className="sect-title">Frequently Asked Question</h3>
        <p ref={linkFaq}>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
      </div>
      <div className="q-list">
        <ul>
          {faqEntries.map((entry, index) => (
            <Entry
              key={index}
              question={entry.question}
              isVisible={entriesVisibility[index]}
              answer={entry.answer}
              onVisibilityChange={() => handleVisibilityChange(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faq;
