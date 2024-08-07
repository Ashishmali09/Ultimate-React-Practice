import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  return (
    <div id={styles.calculator}>
      <Display />
      <ButtonsContainer />
    </div>
  );
}

export default App;
