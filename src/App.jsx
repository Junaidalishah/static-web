import React from "react";
import Header from "./Header";
import "./App.css";
import Explore from "./Explore";
import FoodMenu from "./FoodMenu";
import Footer from "./Footer";
function App() {
  return (
    <div className="app">
      <Header />
      <Explore />
      <FoodMenu />
      <Footer />
    </div>
  );
}

export default App;
