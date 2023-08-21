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
import FancyEntry from "./pages/fancy-entry/FancyEntry";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CallHistory from "./pages/calling/CallHistory";
import CallStatement from "./pages/calling/CallStatement";
import CallSettelment from "./pages/calling/CallSettelment";
import MatchStatement from "./pages/matchstatement.jsx/MatchStatement";
import AdminShareCommSettlement from "./pages/setlment/AdminShareCommSettlement";

function App() {
  return (
    <div>
      <Header />
      <div className="scroll-container">
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
            <Route path="/call-history" element={<CallHistory />} />
            <Route path="/call-statement" element={<CallStatement />} />
            <Route path="/call-settelment" element={<CallSettelment />} />
            <Route path="/match-statement" element={<MatchStatement />} />
            <Route
              path="/admin-share-comm-settlement"
              element={<AdminShareCommSettlement />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
