import React from "react";
import "./Explore.css";
import foodItems from "./foodItems";

function Explore() {
  return (
    <div>
      <h1>Explore Foods</h1>
      <div className="explore-container">
        {foodItems.map((item) => (
          <div key={item.key}>
            <h2>{item.name}</h2>
            <img src={item.img} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
