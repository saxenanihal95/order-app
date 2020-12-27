import React from "react";
import "./Button.scss";

export default function Button({ text, onPress }) {
  return (
    <div className="ButtonContainer" onPress={onPress}>
      {text}
    </div>
  );
}
