import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/home-page/Header";
import HomeContent from "./pages/home-page/HomeContent";
import MatchEntry from "./pages/match-entry/MatchEntry";
import CallManagement from "./pages/call-management/CallManagement";
import Settelment from "./pages/setlment/SettelmentStatement";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/match-entry" element={<MatchEntry />} />
          <Route path="/call-management" element={<CallManagement />} />
          <Route path="/settelment-statement" element={<Settelment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
