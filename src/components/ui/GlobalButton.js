import React from "react";
import "./styles/buttonauth.css";
export const ButtonAuth = ({ text }) => {
  return (
    <div className="grid-input-button-auth">
      <button type="submit" className="button_auth">
        {" "}
        {text}
      </button>
    </div>
  );
};
