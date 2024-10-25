function Addtodo() {
  return (
    <div className="container text-center">
      <div className="row ap-row">
        <div className="col-6">
          <input type="text" name="" Placeholder="Enter todo Here" />
        </div>
        <div className="col-4">
          <input type="date" />{" "}
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success ap-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
