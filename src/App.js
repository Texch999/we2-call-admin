import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./pages/home-page/Header";
import HomeContent from "./pages/home-page/HomeContent";
import Marquee from "react-fast-marquee";
// import CallManagement from "./pages/call-management/CallManagement";

function App() {
  return (
    <div>
      <Header />
      <Marquee className="marqu-tag">
        Your privacy is our priority. With end-to-end encryption, you can be
        sure that your personal messages stay between you and who you send them
        to. Your privacy is our priority. With end-to-end encryption, you can be
        sure that your personal messages stay between you and who you send them
        to.
      </Marquee>
      <HomeContent />
      {/* <CallManagement/> */}
    </div>
  );
}

export default App;
