import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import MatchEntry from "./pages/MatchEntry/MatchEntry";
import FancyEntry from "./pages/FancyEntry/FancyEntry";
import CallHistory from "./pages/callpages/CallHistory";
import CallSettelment from "./pages/callpages/CallSettelment";
import CallStatement from "./pages/callpages/CallStatement";
import MatchStatement from "./pages/matchstatement/MatchStatement";
import OnePagePopup from "./pages/onepagereport/OnePagePopup";
import OnePageReport from "./pages/onepagereport/OnePageReport";
import Settelment from "./pages/settelment-statement/Settelment";
import SettelmentStatement from "./pages/settelment-statement/SettelmentStatement";
import UserManagement from "./pages/user-management/UserManagement";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <Routes className="mt-14vh">
          <Route path="/" element={<Homepage />} />
          <Route path="/matchentry" element={<MatchEntry />} />
          <Route path="/fancyentry" element={<FancyEntry />} />
          <Route path="/call-history" element={<CallHistory />} />
          <Route path="/call-settelment" element={<CallSettelment />} />
          <Route path="/call-statement" element={<CallStatement />} />
          <Route path="/match-statement" element={<MatchStatement />} />
          <Route path="/one-page-report" element={<OnePageReport />} />
          <Route path="/settelment" element={<Settelment />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route
            path="/settelment-statement"
            element={<SettelmentStatement />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
