function TodoItem({ TodoName, TodoDate }) {
  return (
    <div className="container">
      <div className="row am-row">
        <div className="col-6">{TodoName}</div>
        <div className="col-4">{TodoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger am-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
