function Todoitem({ todoName, todoDate }) {
  return (
    <div className="container text-container">
      <div className="row ap-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger ap-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;