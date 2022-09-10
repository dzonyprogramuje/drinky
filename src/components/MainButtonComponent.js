import React from "react";
import "./MainButtonComponent.scss";

import { Link } from "react-router-dom";

export default function MainButtonComponent({ children, to, fully }) {
  return (
    <Link to={to} fully={fully} className="main-button-container">
      <div>{children}</div>
    </Link>
  );
}
