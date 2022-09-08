import React from "react";
import "./TagComponent.scss";

export default function TagComponent({ title, active }) {
  return (
    <div className="tag-component-container" active={active}>
      {title}
    </div>
  );
}
