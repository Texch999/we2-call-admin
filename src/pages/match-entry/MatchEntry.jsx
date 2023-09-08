import MatchScroll from "./MatchScroll";
import MatchPositionTable from "./MatchPositionTable";
import MatchEntries from "./MatchEntries";
import MatchEntryTable from "./MatchEntryTable";

function MatchEntry() {
  return (
    <div>
      <MatchScroll />
      <div className="d-flex flex-wrap">
        <MatchPositionTable teamName={"IND"} />
        <MatchPositionTable teamName={"PAK"} />
      </div>
      <MatchEntries />
      <MatchEntryTable />
    </div>
  );
}

export default MatchEntry;
