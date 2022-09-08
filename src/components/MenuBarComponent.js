import React from "react";
import { Link } from "react-router-dom";

import "./MenuBarComponent.scss";
import LeftIcon from "../images/left-icon.png";
import MenuIcon from "../images/menu-icon.png";

export default function MenuBarComponent({ title }) {
  return (
    <div className="menubar-container">
      <Link to="/">
        <img className="small-icon" src={LeftIcon} height="32" width="32" />
      </Link>
      <h2>{title}</h2>
      <Link to="/">
        <img className="small-icon" src={MenuIcon} height="24" width="24" />
      </Link>
    </div>
  );
}
