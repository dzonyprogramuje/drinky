import React from "react";

import "./InputComponent.scss";

export default function InputComponent({ placeholder, icon }) {
  return (
    <input type="text" className="input-container" placeholder={placeholder} />
  );
}
