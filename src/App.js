import logo from "./logo.svg";
import "./App.css";
import "../src/styles/common.css";
import SettelmentStatement from "./pages/settelment-statement/SettelmentStatement";
import Settelment from "./pages/settelment-statement/Settelment";

function App() {
  return (
    <div className="App">
      <SettelmentStatement />
      <Settelment/>
    </div>
  );
}

export default App;
