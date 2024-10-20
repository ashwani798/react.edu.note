// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Fooditems from "./components/Fooditems";
import Ermessage from "./components/Ermessage";
import Container from "./components/container";

import "./App.css";

function App() {
  let fooditems = ["Dal", "Veg", "Fruit", "Salad", "Ghee", "Chapati"];
  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <Fooditems items={fooditems}></Fooditems>
        <Ermessage items={fooditems}></Ermessage>
      </Container>

      <Container>
        <p>Above is the list of healthy foods are good for healths.</p>
      </Container>
    </>
  );
}

export default App;
