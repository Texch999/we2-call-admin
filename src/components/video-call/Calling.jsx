import { useState } from "react";
import ScoreBoard from "./ScoreBoard";
import UserList from "./UserList";
import "./styles.css";

function Calling(props) {
  const { isAdminCreated, meetingId, liveMeeting } = props;
  console.log(props, "===>PROPS");
  const [activeIndex, setActiveIndex] = useState(1);
  const buttons = ["Join Users", "Score Board"];
  const handleButton = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="w-25 header-bg h-80vh rounded p-1">
      <div className="w-100 num-btn-bg rounded p-2">
        <div className="d-flex align-items-center justify-content-between font-14">
          {buttons?.length > 0 &&
            buttons?.map((data, index) => (
              <button
                key={index}
                className={`rounded-pill py-1 px-3 border-none ${
                  activeIndex === index ? "bg-yellow" : "bg-blue"
                }`}
                onClick={() => handleButton(index)}
              >
                {data}
              </button>
            ))}
        </div>
        <div className="d-flex align-items-center justify-content-between font-14 mt-2">
          <div className="rounded-pill py-1 px-3 bg-blue">28-12-2024</div>
          <div className="rounded-pill py-1 px-3 bg-blue">T20</div>
          <div className="rounded-pill py-1 px-3 bg-blue">IND vs AUS</div>
        </div>
      </div>
      {activeIndex === 0 && <UserList />}
      {activeIndex === 1 && <ScoreBoard />}
    </div>
  );
}

export default Calling;
