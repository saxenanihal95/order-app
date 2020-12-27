import React from "react";
import "./Button.scss";

export default function Button({ text, onClick }) {
  return (
    <div className="ButtonContainer" onClick={onClick}>
      {text}
    </div>
  );
}
