import { useContext } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ TodoName, TodoDate }) {
  const { handleDeleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row am-row">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger am-button"
            onClick={() => handleDeleteItem(TodoName)}
          >
            <RiDeleteBin5Fill />
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
