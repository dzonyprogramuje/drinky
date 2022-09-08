import React from "react";

import "./InputComponent.scss";

export default function InputComponent({ placeholder, icon }) {
  return (
    <div className="input-container">
      <input type="text" placeholder={placeholder} />
      <img className="input-icon" src={icon} />
    </div>
  );
}
