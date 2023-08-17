import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./pages/home-page/Header";
import HomeContent from "./pages/home-page/HomeContent";
import CallManagement from "./pages/call-management/CallManagement";

function App() {
  return (
    <div>
      <Header />
      <CallManagement />
      {/* <HomeContent /> */}
    </div>
  );
}

export default App;
