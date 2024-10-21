// import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Fooditems from "./components/Fooditems";
import Ermessage from "./components/Ermessage";
import Container from "./components/container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  let [fooditems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...fooditems, newFoodItem];
      setFoodItems(newItems);
      console.log("Food value enter is" + newFoodItem);
    }
  };
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <Fooditems items={fooditems}></Fooditems>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <Ermessage items={fooditems}></Ermessage>
      </Container>
    </>
  );
}

export default App;
