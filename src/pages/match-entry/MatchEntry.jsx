import "./styles.css";
import MatchScroll from "./MatchScroll";
import MatchPositionTable from "./MatchPositionTable";

function MatchEntry() {
  return (
    <div>
      <MatchScroll />
      <div className="d-flex p-3">
        <MatchPositionTable teamName={"IND"} />
        <MatchPositionTable teamName={"PAK"} />
      </div>
    </div>
  );
}

export default MatchEntry;
