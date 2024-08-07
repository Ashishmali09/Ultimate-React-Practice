import React, { useState } from "react";
import FoodItems from "./components/FoodItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  // let foodItems = [];
  // let foodItems = ["Dal", "Green vegetable", "Eggs"];

  /*  if (foodItems.length === 0) {
    return <h3>I am still hungry</h3>;
  } */

  // let [textToShow, setTextToShow] = useState("Food item entered by user");

  let [foodItems, setFoodItems] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newFoodItems = [...foodItems, newFoodItem];
      setFoodItems(newFoodItems);
      console.log("Food value entered is " + newFoodItem);
    }
    // console.log(event);
    // setTextToShow(event.target.value);
  };

  return (
    <React.Fragment>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={handleKeyDown} />
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
      {/* <Container>
        <p>
          Above is the list of healthy foods that are great for your health and
          well being
        </p>
      </Container> */}
    </React.Fragment>
  );
}

export default App;
