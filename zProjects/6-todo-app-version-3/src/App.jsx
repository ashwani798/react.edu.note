import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import WEelcomeMessage from "./components/WelcomeMessage";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useReducer, useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

const todoItemReducer = (currentTodoItems, action) => {
  if (action.type === "NEW_ITEM") {
    setTodoItems((currentTodoItems) => [
      ...currentTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ]);
  } else if (action.type === "DELETE_ITEM") {
  }
  return [];
};

function App() {
  //const [todoItems, setTodoItems] = useState([]);
  const [newTodoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
    /**/
  };
  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <Appname />
        <Addtodo />
        <WEelcomeMessage></WEelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
