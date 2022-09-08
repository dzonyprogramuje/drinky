import React from "react";
import { Link } from "react-router-dom";

import "./MenuBarComponent.scss";

import { IoMdArrowRoundBack as BackIcon } from "react-icons/io";
import { AiOutlineMenu as MenuIcon } from "react-icons/ai";

export default function MenuBarComponent({ title }) {
  return (
    <div className="menubar-container">
      <Link to="/">
        <BackIcon className="icon-base icon-big" />
      </Link>
      <h2>{title}</h2>
      <Link to="/">
        <MenuIcon className="icon-base icon-big" />
      </Link>
    </div>
  );
}
