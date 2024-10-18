//import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Fooditems from "./components/Fooditems";
import Ermessage from "./components/Ermessage";

import "./App.css";

function App() {
  let fooditems = ["Dal", "Veg", "Fruit", "Saled", "Chapati", "Ghee"];
  return (
    <>
      <hi>Healthy Foods</hi>
      <Fooditems items={fooditems}></Fooditems>
      <Ermessage items={fooditems}></Ermessage>
    </>
  );
}

export default App;
