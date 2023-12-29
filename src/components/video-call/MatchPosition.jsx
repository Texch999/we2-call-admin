function MatchPosition(props) {
  const { matchId, liveMeeting } = props;
  console.log(props, "===>PROPS");
  return (
    <div className="w-25 header-bg h-80vh rounded p-1 font-14">
      <div className="num-btn-bg rounded p-2">
        <div className="d-flex align-items-center justify-content-between">
          <div className="rounded-pill py-1 px-3 bg-blue">28-12-2024</div>
          <div className="rounded-pill py-1 px-3 bg-blue">T20</div>
          <div className="rounded-pill py-1 px-3 bg-blue">IND vs AUS</div>
        </div>
      </div>
      <div className="num-btn-bg rounded p-2 mt-1">
        <div>Srinivas - Match Position</div>
      </div>
      <div className="num-btn-bg rounded p-2 mt-1">
        <div className="d-flex align-items-center justify-content-between">
          <div className="flex-column flex-center">
            <div>IND</div>
            <div>200000</div>
          </div>
          <div className="flex-column flex-center">
            <div>PAK</div>
            <div>200000</div>
          </div>
        </div>
        <hr className="sb-line" />
      </div>
    </div>
  );
}

export default MatchPosition;
