import ScoreBoard from "./ScoreBoard";
import UserList from "./UserList";
import "./styles.css";

function Calling() {
  const buttons = ["Join Users", "Score Board"];
  return (
    <div className="w-25 header-bg h-80vh rounded p-1">
      <div className="w-100 num-btn-bg rounded p-2">
        <div className="d-flex align-items-center justify-content-between font-14">
          <button className="rounded-pill py-1 px-3 border-none bg-yellow">
            Join Users
          </button>
          <button className="rounded-pill py-1 px-3 border-none bg-blue">
            Score Board
          </button>
        </div>
        <div className="d-flex align-items-center justify-content-between font-14 mt-2">
          <div className="rounded-pill py-1 px-3 bg-blue">28-12-2024</div>
          <div className="rounded-pill py-1 px-3 bg-blue">T20</div>
          <div className="rounded-pill py-1 px-3 bg-blue">IND vs AUS</div>
        </div>
      </div>
      <UserList />
      <ScoreBoard />
    </div>
  );
}

export default Calling;
