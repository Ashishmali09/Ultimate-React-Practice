import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem TodoDate={item.dueDate} TodoName={item.name} />
      ))}
    </div>
  );
};
export default TodoItems;
