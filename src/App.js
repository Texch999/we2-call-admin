import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/home-page/Header";
import HomeContent from "./pages/home-page/HomeContent";
import MatchEntry from "./pages/match-entry/MatchEntry";
import SettelmentStatement from "./pages/setlment/SettelmentStatement";
import SuperAdminCallManagement from "./pages/call-management/SuperAdminCallManagement";
import Settelment from "./pages/setlment/Settelment";
import CallManagement from "./pages/call-management/CallManagement";
import FancyEntry from "./pages/fancy-entry/FancyEntry";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/match-entry" element={<MatchEntry />} />
          <Route path="/fancy-entry" element={<FancyEntry />} />
          <Route path="/call-management" element={<CallManagement />} />
          <Route
            path="/settelment-statement"
            element={<SettelmentStatement />}
          />
          <Route path="/settelment" element={<Settelment />} />
          <Route
            path="/super-admin-call-management"
            element={<SuperAdminCallManagement />}
          />
          <Route path="/settelment-statement" element={<Settelment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
