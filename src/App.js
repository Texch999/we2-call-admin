import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import MatchEntry from "./pages/MatchEntry/MatchEntry";
import FancyEntry from "./pages/FancyEntry/FancyEntry";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/matchentry" element={<MatchEntry />} />
          <Route path="/fancyentry" element={<FancyEntry />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
