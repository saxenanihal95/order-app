import React from "react";
import Button from "../Button/Button";
import "./Header.scss";

export default function Header() {
  return (
    <div className="HeaderContainer">
      <Button text="Meal Deals" />
      <Button text="Classic Burritos" />
      <Button text="Classic Burrito Bowl" />
      <Button text="Nachos, Tacos and Quesadillas" />
      <Button text="Jarritos" />
      <Button text="Soft Drinks" />
    </div>
  );
}
