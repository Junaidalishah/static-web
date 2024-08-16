import React from "react";
import "./Header.css";
import Logo from "/src/assets/pngtree-restaurant-logo-png-image_4009936-removebg-preview.png";

function Header() {
  return (
    <div>
      <div className="navbar">
        <div className="nav-logo-title">
          <div className="nav-logo border">
            <img className="logo" src={Logo} alt="Logo" />
          </div>
          <div className="nav-name border">
            <h3 className="name">Restoran</h3>
          </div>
        </div>
        <div className="nav-links">
          <ul className="links ">
            <li className="border">
              <a href="#home">Home</a>
            </li>
            <li className="border">
              <a href="#foods">Foods</a>
            </li>
            <li className="border">
              <a href="#about">About</a>
            </li>
            <li className="border">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="top">
        <div className="search-bar">
          <input placeholder="search For Food"></input> <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
