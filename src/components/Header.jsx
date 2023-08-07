import "./common.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header flex-space-evenly">
      <h3 onClick={() => navigate("/")}>Header</h3>
      <h3 onClick={() => navigate("/matchentry")}>MatchEntry</h3>
      <h3 onClick={() => navigate("/fancyentry")}>FancyEntry</h3>
    </div>
  );
}

export default Header;
