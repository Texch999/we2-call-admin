import logo from "./logo.svg";
import "./App.css";
import "../src/styles/common.css";
import SettelmentStatement from "./pages/settelment-statement/SettelmentStatement";
import Settelment from "./pages/settelment-statement/Settelment";
import CallStatement from "./pages/settelment-statement/callpages/CallStatement";
import CallHistory from "./pages/settelment-statement/callpages/CallHistory";
import CallSettelment from "./pages/settelment-statement/callpages/CallSettelment";
import PrivacyPolicy from "./pages/settelment-statement/privacypolicy/PrivacyPolicy";

function App() {
  return (
    <div className="App">
      {/* <SettelmentStatement />
      <Settelment />
      <CallStatement />
      <CallHistory/>
      <CallSettelment/> */}
      <PrivacyPolicy/>
    </div>
  );
}

export default App;
