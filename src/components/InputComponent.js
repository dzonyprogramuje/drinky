import React from "react";

import { AiOutlineUserAdd as AddUser } from "react-icons/ai";

import "./InputComponent.scss";

export default function InputComponent({ placeholder }) {
  return (
    <div className="input-container">
      <input type="text" placeholder={placeholder} />
      <AddUser className="icon-base" />
    </div>
  );
}
