import HomeContent from "../pages/home-page/HomeContent";

import MatchEntry from "../pages/match-entry/MatchEntry";
import SuperAdminCallManagement from "../pages/call-management/SuperAdminCallManagement";
import CallManagement from "../pages/call-management/CallManagement";
import FancyEntry from "../pages/fancy-entry/FancyEntry";
import SportsManagement from "../pages/sport-management/SportsManagement";
import UserManagement from "../pages/user-management/UserManagement";
import CallHistory from "../pages/calling/CallHistory";
import CallStatement from "../pages/calling/CallStatement";
import CallSettlement from "../pages/calling/CallSettelment";
import MatchStatement from "../pages/matchstatement/MatchStatement";
import ReportPage from "../pages/onepagereport/ReportPage";
import AdminShareCommSettlement from "../pages/setlment/AdminShareCommSettlement";
import SettlementStatement from "../pages/setlment/SettelmentStatement";
import Settlement from "../pages/setlment/Settelment";

import AdminOnePageReport from "../pages/onepagereport/AdminOnePageReport";
import AdminSharesMatchStatement from "../pages/matchstatement/AdminSharesMatchStatement";
import AddUsers from "../pages/add-users/AddUsers";
import UpgradePackage from "../pages/upgrade-package/UpgradePackage";
import AddAdmins from "../pages/add-users/AddAdmins";
import PrivacyPolicy from "../pages/privacy-policy/PrivacyPolicy";

import ShareRiskLiveMatches from "../pages/match-risk/ShareRiskLiveMatches";
import MatchShareRisk from "../pages/match-risk/MatchShareRisk";
import MatchShareRiskPosition from "../pages/match-risk/MatchShareRiskPosition";
import FancyShareRisk from "../pages/match-risk/FancyShareRisk";
import ToursAndTournaments from "../pages/tours-tournaments/ToursAndTournaments";
import ViewOffers from "../pages/tours-tournaments/ViewOffers";
import EditProfile from "../pages/editprofile/EditProfile";

export const AgentRoutes = [
  {
    path: "/",
    component: HomeContent,
  },
  {
    path: "/match-entry",
    component: MatchEntry,
  },
  {
    path: "/fancy-entry",
    component: FancyEntry,
  },
  {
    path: "/upgrade-package",
    component: UpgradePackage,
  },
  {
    path: "/call-management",
    component: CallManagement,
  },
  {
    path: "/settlement-statement",
    component: SettlementStatement,
  },
  {
    path: "/settlement",
    component: Settlement,
  },
  {
    path: "/super-admin-call-management",
    component: SuperAdminCallManagement,
  },
  {
    path: "/sport-management",
    component: SportsManagement,
  },
  {
    path: "/user-management",
    component: UserManagement,
  },
  {
    path: "/call-history",
    component: CallHistory,
  },
  {
    path: "/call-statement",
    component: CallStatement,
  },
  {
    path: "/call-settlement",
    component: CallSettlement,
  },
  {
    path: "/match-statement",
    component: MatchStatement,
  },
  {
    path: "/report-page",
    component: ReportPage,
  },
  {
    path: "/admin-share-comm-settlement",
    component: AdminShareCommSettlement,
  },
  {
    path: "/admin-one-page-report",
    component: AdminOnePageReport,
  },
  {
    path: "/admin-share-match-statement",
    component: AdminSharesMatchStatement,
  },
  {
    path: "/privacy-policy",
    component: PrivacyPolicy,
  },
  {
    path: "/add-users",
    component: AddUsers,
  },
  {
    path: "/add-admins",
    component: AddAdmins,
  },
  {
    path: "/match-share-risk/:team_name",
    component: MatchShareRisk,
  },
  {
    path: "/share-risk-live-matches",
    component: ShareRiskLiveMatches,
  },
  {
    path: "/match-share-risk-position",
    component: MatchShareRiskPosition,
  },
  {
    path: "/fancy-share-risk",
    component: FancyShareRisk,
  },
  {
    path: "/tours-tournaments",
    component: ToursAndTournaments,
  },
  {
    path: "/offers",
    component: ViewOffers,
  },
  {
    path: "/edit-profile",
    component: EditProfile,
  },
];
