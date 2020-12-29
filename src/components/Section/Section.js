import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Grid from "../Grid/Grid";
import SubTitle from "../SubTitle/SubTitle";
import Title from "../Title/Title";
import "./Section.scss";
import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";

import { createServer } from "miragejs";
import Modal from "../Modal/Modal";

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
          price: "11.00",
        },
        {
          id: 2,
          title: "2 Burritos + Soft Drink + Brownie",
          subTitle:
            "2 Burritos + 2 Soft Drink + 2 Brownie Each Burrito, Tortilla filled with rice, pinto beans, with choice of main filling, Pico de Gallo, Cheese and Guacamole as standard.",
          price: "20.00",
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
          price: "7.00",
        },
        {
          id: 2,
          title: "Vegan Burrito Bowl",
          subTitle:
            "No Tortilla, but more Filling. Bowl filled with choice of main filling, Mexican rice, pinto beans, onions and peppers, Pico de gallo, spicy sauce (as above), Vegan Mayo, Vegan cheese and guacamole.",
          price: "7.80",
        },
        {
          id: 3,
          title: "Veggie Burrito Bowl",
          subTitle:
            "No Tortilla, but more Filling. Bowl filled with choice of main filling, Mexican rice, pinto beans, onions and peppers, Pico de gallo, spicy sauce (as above), sour cream, cheese and guacamole.",
          price: "7.80",
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
          price: "7.80",
        },
        {
          id: 2,
          title: "Vegan Burrito Bowl",
          subTitle:
            "No Tortilla, but more Filling. Bowl filled with choice of main filling, Mexican rice, pinto beans, onions and peppers, Pico de gallo, spicy sauce (as above), sour cream, cheese and guacamole.",
          price: "7.80",
        },
        {
          id: 3,
          title: "Veggie Burrito Bowl",
          subTitle:
            "No Tortilla, but more Filling. Bowl filled with choice of main filling, Mexican rice, pinto beans, onions and peppers, Pico de gallo, spicy sauce (as above), sour cream, cheese and guacamole.",
          price: "7.80",
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
  const [modalVisible, setModalVisible] = useState(false);
  const [chooseFavourite, setChooseFavourite] = useState(false);
  const [seletectedItem, setSelectedItem] = useState({});
  const [activeTabIndex, setActiveTabIndex] = useState(1);
  const [count, setCount] = useState({});
  const [sectionId, setSectionId] = useState(null);
  const [basket, setBasket] = useState({});
  useEffect(() => {
    fetch("/api/sections")
      .then((res) => res.json())
      .then((json) => {
        setSections(json.sections);
      });
  }, []);

  const pizzas = [
    { title: "Margerite" },
    { title: "Margerite" },
    { title: "Margerite" },
    { title: "Margerite" },
    { title: "Margerite" },
  ];

  const addons = [
    { title: "French Fries", price: 4 },
    { title: "Green Salad", price: 3 },
    { title: "Tomato", price: 2 },
  ];

  const currentCount = count?.[sectionId]?.[seletectedItem?.id];

  const basketContent = Object.keys(basket).flatMap((sectionId) =>
    Object.keys(basket[sectionId]).map((itemId) => basket[sectionId][itemId])
  );

  console.log(basket);

  return (
    <>
      <Modal visible={modalVisible}>
        {chooseFavourite ? (
          <div>
            <div className="ModalTitle">
              <div className="BackIcon">
                <FaArrowLeft onClick={() => setChooseFavourite(false)} />
              </div>
              <h2>Choose you favourite</h2>
              <span class="close" onClick={() => setModalVisible(false)}>
                &times;
              </span>
            </div>
            <div className="Tabs">
              <div
                className={`Tab${activeTabIndex === 1 ? " active" : ""}`}
                onClick={() => setActiveTabIndex(1)}
              >
                Pizza
              </div>
              <div
                className={`Tab${activeTabIndex === 2 ? " active" : ""}`}
                onClick={() => setActiveTabIndex(2)}
              >
                Extra
              </div>
            </div>
            {activeTabIndex === 1 && (
              <div className="PizzaContainer">
                {pizzas.map((pizza) => (
                  <div
                    className="PizzaItem"
                    onClick={() => setActiveTabIndex(2)}
                  >
                    {pizza.title}
                  </div>
                ))}
              </div>
            )}
            {activeTabIndex === 2 && (
              <div className="PizzaContainer">
                {addons.map((addon) => (
                  <div
                    className="PizzaItem"
                    onClick={() => setActiveTabIndex(2)}
                  >
                    {addon.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="ModalTitle">
              <h2>Add Item to Basket</h2>
              <span class="close" onClick={() => setModalVisible(false)}>
                &times;
              </span>
            </div>
            <div className="ModalBody">
              <div className="ItemHeader">
                <p className="heading">{seletectedItem.title}</p>
                <p>{seletectedItem.price}</p>
              </div>
              <div>
                <p>Choose you favourites</p>
                <p>Margereta</p>
                <p onClick={() => setChooseFavourite(true)}>
                  Choose your second pizza
                </p>
              </div>
            </div>
            <div className="ModalFooter">
              <div className="OrderButtonContainer">
                <div
                  className={
                    currentCount < 2 ? "Decreament disabled" : "Decreament"
                  }
                  onClick={() =>
                    currentCount < 2
                      ? null
                      : setCount({
                          [sectionId]: {
                            [seletectedItem.id]: currentCount - 1,
                          },
                        })
                  }
                >
                  -
                </div>
                <div>{currentCount}</div>
                <div
                  className="Icreament"
                  onClick={() =>
                    setCount({
                      [sectionId]: {
                        [seletectedItem.id]: currentCount + 1,
                      },
                    })
                  }
                >
                  +
                </div>
              </div>
              <div
                className="AddToBasketButton"
                onClick={() => {
                  setBasket({
                    ...basket,
                    [sectionId]: {
                      ...basket?.[sectionId],
                      [seletectedItem.id]: {
                        ...basket?.[sectionId]?.[seletectedItem.id],
                        item: {
                          title: seletectedItem.title,
                          price: seletectedItem.price * currentCount,
                        },
                      },
                    },
                  });
                  setModalVisible(false);
                }}
              >
                <p className="text">Add To Basket </p>
                {seletectedItem.price * currentCount}
              </div>
            </div>
          </div>
        )}
      </Modal>
      <div className="Section">
        <div>
          {sections.map((section) => (
            <div key={section.id}>
              <Title text={section.title} />
              <SubTitle text={section.subTitle} />
              <Grid>
                {section.items.map((item) => (
                  <Card
                    onClick={() => {
                      setSelectedItem(item);
                      setSectionId(section.id);
                      setCount({ [section.id]: { [item.id]: 1 } });
                      setModalVisible(true);
                    }}
                  >
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
            {basketContent.map(({ item }) => (
              <div>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </>
  );
}
