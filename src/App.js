import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./pages/home-page/Header";
import HomeContent from "./pages/home-page/HomeContent";
import MatchEntry from "./pages/match-entry/MatchEntry";
import SettelmentStatement from "./pages/setlment/SettelmentStatement";
import SuperAdminCallManagement from "./pages/call-management/SuperAdminCallManagement";
import Settelment from "./pages/setlment/Settelment";
import CallManagement from "./pages/call-management/CallManagement";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SportsManagement from "./pages/sport-management/SportsManagement";
import UserManagement from "./pages/user-management/UserManagement";

function App() {
  return (
    <div>
      <Header />
      <div className="scroll-container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/match-entry" element={<MatchEntry />} />
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
            <Route path="/sport-management" element={<SportsManagement />} />
            <Route path="/user-management" element={<UserManagement />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
