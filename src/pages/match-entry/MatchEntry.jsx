import "./styles.css";
import MatchScroll from "./MatchScroll";
import MatchPositionTable from "./MatchPositionTable";
import MatchEntries from "./MatchEntries";

function MatchEntry() {
  return (
    <div>
      <MatchScroll />
      <div className="d-flex flex-wrap">
        <MatchPositionTable teamName={"IND"} />
        <MatchPositionTable teamName={"PAK"} />
      </div>
      <MatchEntries />
    </div>
  );
}

export default MatchEntry;
