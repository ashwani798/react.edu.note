function Todoitem1() {
  let todoName = "Buy Milk";
  let todoDate = "17/10/2024";

  return (
    <div class="container text-container">
      <div class="row ap-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger ap-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem1;
