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
import SportsManagement from "./pages/sport-management/SportsManagement";
import UserManagement from "./pages/user-management/UserManagement";
import CallHistory from "./pages/calling/CallHistory";
import CallStatement from "./pages/calling/CallStatement";
import CallSettelment from "./pages/calling/CallSettelment";
import MatchStatement from "./pages/matchstatement/MatchStatement";
import ReportPage from "./pages/onepagereport/ReportPage";
import AdminShareCommSettlement from "./pages/setlment/AdminShareCommSettlement";
import AdminOnePageReport from "./pages/onepagereport/AdminOnePageReport";
import AdminSharesMatchStatement from "./pages/matchstatement/AdminSharesMatchStatement";
import AddUsers from "./pages/add-users/AddUsers";

function App() {
  return (
    <div>
      <Header />
      <div className="scroll-container p-3">
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
            <Route path="/sport-management" element={<SportsManagement />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/call-history" element={<CallHistory />} />
            <Route path="/call-statement" element={<CallStatement />} />
            <Route path="/call-settelment" element={<CallSettelment />} />
            <Route path="/match-statement" element={<MatchStatement />} />
            <Route path="/report-page" element={<ReportPage />} />
            <Route
              path="/admin-share-comm-settlement"
              element={<AdminShareCommSettlement />}
            />
            <Route
              path="/admin-one-page-report"
              element={<AdminOnePageReport />}
            />
            <Route
              path="/admin-share-match-statement"
              element={<AdminSharesMatchStatement />}
            />
            <Route path="/add-users" element={<AddUsers />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
