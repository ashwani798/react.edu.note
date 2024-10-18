import Clockheading from "./components/Clockheading";
import Clockmoto from "./components/clockmoto";
import Currenttime from "./components/Currenttime";
import "bootstrap/dist/css//bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <center>
      <Clockheading></Clockheading>
      <Clockmoto></Clockmoto>
      <Currenttime></Currenttime>
    </center>
  );
}
export default App;
