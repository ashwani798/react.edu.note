//import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  /*let fooditems = ["Dal", "Veg", "Fruit", "Saled", "Chapati", "Ghee"];*/
  let fooditems = [];

  /*if (fooditems.length === 0) {
    return <h3>I am still hungry.</h3>;
  }*/

  /*let emptyMessage =
    fooditems.length === 0 ? <h3>I am still hungry.</h3> : null;*/

  return (
    <>
      <hi>Healthy Foods</hi>
      {fooditems.length === 0 && <h3>I am still hungry.</h3>}
      <ul className="list-group">
        {fooditems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
