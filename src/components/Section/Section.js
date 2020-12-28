import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Grid from "../Grid/Grid";
import SubTitle from "../SubTitle/SubTitle";
import Title from "../Title/Title";
import "./Section.scss";

import { createServer } from "miragejs";

let server = createServer();
server.get("/api/sections", {
  sections: [
    {
      id: 1,
      title: "Meal Deals",
      subTitle:
        "Grab a bargain and enjoy your favourite Burrito with your favourite drink and desert. Each Burrito, Tortilla filled with rice, pinto beans, with choice of main filling, Pico de Gallo, Cheese and Guacamole as standard.",
      items: [
        {
          id: 1,
          title: "Any Burrito + Soft drink + Brownies",
          subTitle:
            "Each Burrito, Tortilla filled with rice, pinto beans, with choice of main filling, Pico de Gallo, Cheese and Guacamole as standard.",
          price: "£11.00",
        },
        {
          id: 2,
          title: "2 Burritos + Soft Drink + Brownie",
          subTitle:
            "2 Burritos + 2 Soft Drink + 2 Brownie Each Burrito, Tortilla filled with rice, pinto beans, with choice of main filling, Pico de Gallo, Cheese and Guacamole as standard.",
          price: "£20.00",
        },
      ],
    },
    {
      id: 2,
      title: "Classic Burritos",
      subTitle: "",
      items: [
        {
          id: 1,
          title: "Carne Burrito",
          subTitle:
            "Large tortilla filled with choice of main filling, Mexican rice, pinto beans, onions and peppers, Pico de gallo, spicy sauce, sour cream, cheese and guacamole. (Vegan burritos come with vegan cheese and sour cream).",
          price: "£7.00",
        },
        {
          id: 2,
          title: "Vegan Burrito Bowl",
          subTitle:
            "No Tortilla, but more Filling. Bowl filled with choice of main filling, Mexican rice, pinto beans, onions and peppers, Pico de gallo, spicy sauce (as above), Vegan Mayo, Vegan cheese and guacamole.",
          price: "£7.80",
        },
        {
          id: 3,
          title: "Veggie Burrito Bowl",
          subTitle:
            "No Tortilla, but more Filling. Bowl filled with choice of main filling, Mexican rice, pinto beans, onions and peppers, Pico de gallo, spicy sauce (as above), sour cream, cheese and guacamole.",
          price: "£7.80",
        },
      ],
    },
    {
      id: 3,
      title: "Classic Burrito Bowl",
      subTitle:
        "Naked Burrito. Box filled with rice, pinto beans, onions and peppers with choice of main filling and salsas. Eat now or later. Our containers are fully microwavable giving you the freedom to eat when you want. They can also be 100% recycled.",
      items: [
        {
          id: 1,
          title: "Grande Burrito Bowl",
          subTitle:
            "No Tortilla, but more Filling. Bowl filled with choice of main filling, Mexican rice, pinto beans, onions and peppers, Pico de gallo, spicy sauce (as above), sour cream, cheese and guacamole.",
          price: "£7.80",
        },
        {
          id: 2,
          title: "Vegan Burrito Bowl",
          subTitle:
            "No Tortilla, but more Filling. Bowl filled with choice of main filling, Mexican rice, pinto beans, onions and peppers, Pico de gallo, spicy sauce (as above), sour cream, cheese and guacamole.",
          price: "£7.80",
        },
        {
          id: 3,
          title: "Veggie Burrito Bowl",
          subTitle:
            "No Tortilla, but more Filling. Bowl filled with choice of main filling, Mexican rice, pinto beans, onions and peppers, Pico de gallo, spicy sauce (as above), sour cream, cheese and guacamole.",
          price: "£7.80",
        },
      ],
    },
    // { id: 4, title: "Nachos, Tacos and Quesadillas", subTitle: "", items: [] },
    // {
    //   id: 5,
    //   title: "Jarritos",
    //   subTitle:
    //     "A selection of our best sellers soft drinks including Jarritos, refreshing traditional Mexican Sooda.",
    //   items: [],
    // },
    // {
    //   id: 6,
    //   title: "Soft Drinks",
    //   subTitle: "",
    //   items: [],
    // },
  ],
});

export default function Section() {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    fetch("/api/sections")
      .then((res) => res.json())
      .then((json) => {
        setSections(json.sections);
      });
  }, []);

  console.log(sections);

  return (
    <div className="Section">
      <div>
        {sections.map((section) => (
          <div key={section.id}>
            <Title text={section.title} />
            <SubTitle text={section.subTitle} />
            <Grid>
              {section.items.map((item) => (
                <Card>
                  <p>{item.title}</p>
                  <p>{item.subTitle}</p>
                  <p>{item.price}</p>
                </Card>
              ))}
            </Grid>
          </div>
        ))}
      </div>
      <div className="OrderContainer">
        <Card>
          <p>Your Basket</p>
        </Card>
      </div>
    </div>
  );
}
