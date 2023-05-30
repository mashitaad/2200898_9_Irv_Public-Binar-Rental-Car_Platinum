import React from "react";
import ArrowDown from "../../../assets/icons/fi_chevron-down.svg";

const FaqEntry = (props) => {
  const handleClick = () => {
    props.onVisibilityChange();
  };

  return (
    <li>
      <div className="question">
        {props.question}
        <button onClick={handleClick}>
          <img
            src={ArrowDown}
            alt="arrow-down"
            {...(props.isVisible
              ? {
                  style: {
                    transform: "rotate(-180deg)",
                    transition: "transform 0.8s",
                  },
                }
              : {
                  style: {
                    transition: "transform 0.8s",
                  },
                })}
          />
        </button>
      </div>
      <div className={props.isVisible ? "answer-active" : "answer-inactive"}>
        {props.answer}
      </div>
    </li>
  );
};

export default FaqEntry;
