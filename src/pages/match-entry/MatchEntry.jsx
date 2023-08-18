import "./styles.css";
import MatchScroll from "./MatchScroll";
import MatchPositionTable from "./MatchPositionTable";

function MatchEntry() {
  return (
    <div>
      <MatchScroll />
      <div className="d-flex">
      <MatchPositionTable />
      <MatchPositionTable />
      </div>
    </div>
  );
}

export default MatchEntry;
