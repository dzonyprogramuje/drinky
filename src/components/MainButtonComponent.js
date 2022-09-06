import React from "react";
import "./MainButtonComponent.scss";

import { Link } from "react-router-dom";

export default function MainButtonComponent({ children, to }) {
  return (
    <Link to={to} className="main-button-container">
      <div>{children}</div>
    </Link>
  );
}
