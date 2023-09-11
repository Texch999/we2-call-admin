import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./pages/home-page/Header";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="scroll-container">
      <BrowserRouter>
        <Header />
        <div className="p-3">
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
