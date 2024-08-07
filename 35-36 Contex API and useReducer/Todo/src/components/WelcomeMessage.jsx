import { useContext } from "react";
import styles from "./WelcomeMessage.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && (
      <p className={styles.welcome}>
        💛You have no todos to do! Enjoy your day!!🤩
      </p>
    )
  );
};
export default WelcomeMessage;
