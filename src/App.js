import React from "react";
import "./App.css";
import FoodApi from "./FoodApi";

function App() {
  return (
    <div className="App">
      <header>
        <h2>Want to eat something? But don't know what.</h2>
        <h3>
          Try out one of the random recipes. It may become your favourite.
        </h3>
      </header>
      <FoodApi />
    </div>
  );
}

export default App;
