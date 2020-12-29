import React from "react";
import "./Card.scss";

export default function Card({ children, onClick }) {
  const className = onClick ? "CardContainer clickable" : "CardContainer";
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}
