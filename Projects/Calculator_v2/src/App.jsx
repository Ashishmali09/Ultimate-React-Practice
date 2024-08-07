import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const handleButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newCalVal = calVal + buttonText;
      setCalVal(newCalVal);
    }
  };
  return (
    <div id={styles.calculator}>
      <Display calVal={calVal} />
      <ButtonsContainer handleButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
