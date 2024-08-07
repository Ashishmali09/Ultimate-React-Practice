import { useRef, useState } from "react";
import styles from "./AddTodo.module.css";
import { BiSolidBookAdd } from "react-icons/bi";

function AddTodo({ handleNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   noOfUpdates.current += 1;
  // };
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`No of updates are: ${noOfUpdates.current}`);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    console.log(`${todoName} due on ${dueDate}`);
    handleNewItem(todoName, dueDate);
    // setTodoName("");
    // setDueDate("");
  };
  return (
    <div className="container">
      <form className="row am-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            className={styles.todo}
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo here"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            className={styles.todo}
            type="date"
            ref={dueDateElement}
            // value={dueDate}
            // onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success am-button align-btn">
            <BiSolidBookAdd />
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTodo;
