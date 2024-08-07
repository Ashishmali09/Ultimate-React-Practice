import styles from "./Display.module.css";

const Display = ({ calVal }) => {
  return <input type="text" id={styles.display} value={calVal} readOnly />;
};
export default Display;
