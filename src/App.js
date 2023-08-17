import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./pages/home-page/Header";
import HomeContent from "./pages/home-page/HomeContent";
import MatchEntry from "./pages/match-entry/MatchEntry";

function App() {
  return (
    <div>
      <Header />
      {/* <HomeContent /> */}
      <MatchEntry />
    </div>
  );
}

export default App;
