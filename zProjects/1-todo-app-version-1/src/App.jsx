import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Todoitem1 from "./components/Todoitem1";
import Todoitem2 from "./components/Todoitem2";
function App() {
  return (
    <center class="todo-container">
      <Appname />
      <Addtodo />
      <Todoitem1></Todoitem1>
      <Todoitem2></Todoitem2>
    </center>
  );
}

export default App;
