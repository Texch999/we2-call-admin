// import "./Styles.css";
import miIcon from "./Assets/miIcon.png";
import cskIcon from "./Assets/cskIcon.png";
import copyIcon from "./Assets/copyIcon.png";

function ScoreBoard() {
  const latestBalls = [
    { run: "4" },
    { run: "6" },
    { run: "1" },
    { run: "0" },
    { run: "2" },
    { run: "3" },
  ];
  const bowlingStats = [
    {
      title: "Bowlwer",
      dataIndex: "bowler",
      key: "bowler",
    },
    {
      title: "O",
      dataIndex: "overs",
      key: "overs",
    },
    {
      title: "M",
      dataIndex: "maiden",
      key: "maiden",
    },
    {
      title: "R",
      dataIndex: "runs",
      key: "runs",
    },
    {
      title: "W",
      dataIndex: "wickets",
      key: "wickets",
    },
    {
      title: "Eco",
      dataIndex: "economy",
      key: "economy",
    },
  ];
  const bowlerPerformance = [
    {
      key: "1",
      bowler: "Siraj",
      overs: "2",
      maiden: "0",
      runs: "9",
      wickets: "3",
      economy: "4.5",
    },
  ];
  const battingStats = [
    {
      title: "Batsman",
      dataIndex: "batsman",
      key: "batsman",
    },
    {
      title: "R",
      dataIndex: "runs",
      key: "runs",
      alignCenter: "center",
      // render: (text) => (
      //   <>
      //     <span style={{fontSize:"28px"}}>{text}</span>
      //   </>
      // ),
    },
    {
      title: "B",
      dataIndex: "balls",
      key: "balls",
    },
    {
      title: "4s",
      dataIndex: "fours",
      key: "fours",
    },
    {
      title: "6s",
      dataIndex: "sixes",
      key: "sixes",
    },
    {
      title: "SR",
      dataIndex: "strickrate",
      key: "strickrate",
    },
  ];
  const batsmanPerformance = [
    {
      key: "1",
      batsman: "Kohli",
      runs: "98",
      balls: "58",
      fours: "9",
      sixes: "3",
      strickrate: "165",
    },
    {
      key: "2",
      batsman: "Rohit",
      runs: "44",
      balls: "44",
      fours: "4",
      sixes: "2",
      strickrate: "100",
    },
  ];
  return (
    <div className="vc-score-board-container">
      <div className="display-flex-property display-space-between-property">
        <div className="display-flex-property vc-live-button">
          <span>Live</span>
          Info
        </div>
        <div className="vc-latest-balls-display display-flex-property">
          over4
          {latestBalls.map((value, index) => (
            <div key={index}>{value.run}</div>
          ))}
        </div>
      </div>
      {/* <div className="bowler-table">
        <Table pagination={false} columns={bowlingStats} dataSource={bowlerPerformance} />
      </div> */}
      <div className="score-card-container">
        <div className="live-match-card">Live Match</div>
        <div className="live-score-container display-flex-property display-space-between-property">
          <div className="team-score display-flex-property">
            <div>
              <img src={miIcon}></img>
            </div>
            MI
          </div>
          <div className="team-score display-flex-property text-center">
            <span>0/0</span>
            overs 0.0
          </div>
          <h2>vs</h2>
          <div className="team-score display-flex-property text-center">
            <span>0/0</span>
            overs 0.0
          </div>
          <div className="team-score display-flex-property">
            <div>
              <img src={cskIcon}></img>
            </div>
            CSK
          </div>
        </div>
        <div className="run-rate-container display-flex-property display-space-between-property">
          <div>
            CRR:0.0 <br />
            RRR:0.0
          </div>
          <div>Csk need 67 runs to win</div>
        </div>
        <span>Most realiable Online ID</span>
        <div className="texch-link-container">
          <span>https://texch.app/#/</span>{" "}
          <img
            onClick={() => {
              navigator.clipboard.writeText("https://texch.app/#/");
            }}
            src={copyIcon}
          ></img>{" "}
        </div>
        <div className="live-adds-conainer display-flex-property display-space-around-property">
          <div className="display-flex-property flex-direction-column ">
            <div className="display-flex-property">
              <span className="live-adds-display">97</span>
              <p className="live-adds-display">97</p>
            </div>
            <div>Dono(Both)</div>
          </div>
          <div className="latest-ball-score display-flex-property display-flex-end-property">
            six
            <span>6</span>
          </div>
        </div>
        <div className="fancy-declaration-container">
          <div className="fancy-declaration-no display-flex-property display-space-between-property">
            <div>
              52 <span className="font-size-10">No</span>
            </div>
            <div className="fancy-declaration-runs">
              <span className="font-size-10">Balls</span> 36
            </div>
          </div>
          <div className="fancy-declaration-yes display-flex-property display-space-between-property">
            <div>
              52 <span className="font-size-10">Yes</span>
            </div>
            <div className="fancy-declaration-runs">
              <span className="font-size-10">Runs</span> 54
            </div>
          </div>
        </div>
        <center>
          <div className="over-highlight-container">
            <div>
              <span className="font-size-20">06</span>
              <br />
              over
            </div>
          </div>
        </center>
        <div className="bowler-table">
          {/* <Table pagination={false} columns={battingStats} dataSource={batsmanPerformance} /> */}
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
