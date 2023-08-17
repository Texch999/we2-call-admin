import MatchHeader from "./MatchHeader";
import MatchPositionTable from "./MatchPositionTable";
import "./styles.css";

function MatchEntry() {
  return (
    <div className="homepage">
      <MatchHeader />
      <div className="flex">
        <MatchPositionTable cricketTeam = {'IND'} />
        <MatchPositionTable cricketTeam = {'PAK'} />
      </div>
    </div>
  );
}

export default MatchEntry;
