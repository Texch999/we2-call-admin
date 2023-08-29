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
import UpgradePackage from "./pages/upgrade-package/UpgradePackage";
import AddAdmins from "./pages/add-users/AddAdmins";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import HeaderTwo from "./pages/home-page/HeaderTwo";

import ShareRiskLiveMatches from "./pages/match-risk/ShareRiskLiveMatches";
import MatchShareRisk from "./pages/match-risk/MatchShareRisk";
import MatchShareRiskPosition from "./pages/match-risk/MatchShareRiskPosition";
import FancyShareRisk from "./pages/match-risk/FancyShareRisk";
import ToursAndTournaments from "./pages/tours-tournaments/ToursAndTournaments";

function App() {
  return (
    <div className="scroll-container">
      <BrowserRouter>
        <Header />
        <div className="p-3">
          <Routes>
            <Route path="/" element={<HomeContent />} />
            <Route path="/match-entry" element={<MatchEntry />} />
            <Route path="/fancy-entry" element={<FancyEntry />} />
            <Route path="/upgrade-package" element={<UpgradePackage />} />
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
            />{" "}
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/add-users" element={<AddUsers />} />
            <Route path="/add-admins" element={<AddAdmins />} />
            <Route
              path="/match-share-risk/:team_name"
              element={<MatchShareRisk />}
            />
            <Route
              path="/share-risk-live-matches"
              element={<ShareRiskLiveMatches />}
            />
            <Route
              path="/match-share-risk-position"
              element={<MatchShareRiskPosition />}
            />
            <Route path="/fancy-share-risk" element={<FancyShareRisk />} />
            <Route
              path="/tours-tournaments"
              element={<ToursAndTournaments />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
