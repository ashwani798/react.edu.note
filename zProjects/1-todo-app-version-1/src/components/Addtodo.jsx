function Addtodo() {
  return (
    <div class="container text-center">
      <div class="row ap-row">
        <div class="col-6">
          <input type="text" name="" Placeholder="Enter todo Here" />
        </div>
        <div class="col-4">
          <input type="date" />{" "}
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success ap-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
