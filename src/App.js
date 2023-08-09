import logo from "./logo.svg";
import "./App.css";
import "../src/styles/common.css";
import SettelmentStatement from "./pages/settelment-statement/SettelmentStatement";
import Settelment from "./pages/settelment-statement/Settelment";
import CallStatement from "./pages/callpages/CallStatement";
import CallHistory from "./pages/callpages/CallHistory";
import CallSettelment from "./pages/callpages/CallSettelment";
import PrivacyPolicy from "./pages/privacypolicy/PrivacyPolicy";
import OnePageReport from "./pages/onepagereport/OnePageReport";
import MatchStatement from "./pages/matchstatement/MatchStatement";

function App() {
  return (
    <div className="App">
      <SettelmentStatement />
      <Settelment />
      <CallStatement />
      <CallHistory />
      <CallSettelment />
      <PrivacyPolicy />
      <OnePageReport />
      <MatchStatement />
    </div>
  );
}

export default App;
