import React from "react";
import "./FoodMenu.css";
import foodmenu from "./FooddMenu";

function FoodMenu() {
  return (
    <div className="Foodmenu">
      <h1 className="food">Food Menu</h1>
      <div className="menu-container">
        {foodmenu.map((item) => (
          <div className="food-item" key={item.key}>
            <img className="food-img" src={item.img} alt={item.name} />
            <div className="food-details">
              <h2 className="name">{item.name}</h2>
              <h2 className="price">{item.price}</h2>
              <p className="desc">{item.description}</p>
              <button>{item.button}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodMenu;
