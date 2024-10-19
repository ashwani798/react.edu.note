import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";

import TodoItems from "./components/TodoItems";
import "./App.css";
function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "17/10/2024",
    },
    {
      name: "Go College",
      dueDate: "17/10/2024",
    },
    {
      name: "Back Home",
      dueDate: "17/10/2024",
    },
  ];
  return (
    <center className="todo-container">
      <Appname />
      <Addtodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
