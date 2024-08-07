import { RiDeleteBin5Fill } from "react-icons/ri";

function TodoItem({ TodoName, TodoDate, handleDeleteItem }) {
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
