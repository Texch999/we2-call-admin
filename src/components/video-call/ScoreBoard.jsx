import { Images } from "./../../images/index";

function ScoreBoard() {
  return (
    <div className="w-100 active-chat-bg rounded p-1 mt-1 font-12 sb-scroll">
      <div className="w-100 d-flex align-items-center justify-content-between font-12">
        <div className="flex-column">
          <div className="bg-yellow rounded px-1">Live</div>
          <div className="bg-blue rounded px-1">Info</div>
        </div>
        <div className="d-flex align-items-center bg-blue rounded p-1">
          <div>Over 10</div>
          <div className="balls-div d-flex align-items-center">
            <div className="single-ball mx-1 runs-bg rounded-circle">6</div>
            <div className="single-ball mx-1 runs-bg rounded-circle">5</div>
            <div className="single-ball mx-1 runs-bg rounded-circle">4</div>
            <div className="single-ball mx-1 runs-bg rounded-circle">3</div>
            <div className="single-ball mx-1 runs-bg rounded-circle">2</div>
            <div className="single-ball mx-1 runs-bg rounded-circle">1</div>
          </div>
        </div>
      </div>
      <div className="bg-blue rounded font-12 mt-1">
        <div className="w-100 p-1 d-flex">
          <div className="col-4">Bowler</div>
          <div className="col-8 d-flex align-items-center justify-content-between">
            <div>O</div>
            <div>M</div>
            <div>R</div>
            <div>W</div>
            <div>ECO</div>
          </div>
        </div>
        <hr className="sb-line" />
        <div className="w-100 p-1 d-flex">
          <div className="col-4">Ashwin</div>
          <div className="col-8 d-flex align-items-center justify-content-between">
            <div>5</div>
            <div>2</div>
            <div>32</div>
            <div>4</div>
            <div>5.50</div>
          </div>
        </div>
        <hr className="sb-line" />
        <div className="w-100 p-1 d-flex">
          <div className="col-4">Siraj</div>
          <div className="col-8 d-flex align-items-center justify-content-between">
            <div>5</div>
            <div>2</div>
            <div>32</div>
            <div>4</div>
            <div>5.50</div>
          </div>
        </div>
      </div>
      <div className="bg-blue rounded font-12 mt-1 py-1">
        <div className="bg-yellow w-50">Match Of The Day</div>
        <div className="p-1 w-100 d-flex align-items-center justify-content-between">
          <div className="team-img flex-center">
            <img src={Images.cskIcon} alt="" />
          </div>
          <div className="flex-column">
            <div className="yellow-clr">0/0</div>
            <div>Over 0.0</div>
          </div>
          <div className="font-1rem">VS</div>
          <div className="flex-column">
            <div className="yellow-clr">200/6</div>
            <div>Over 20.0</div>
          </div>
          <div className="team-img flex-center">
            <img src={Images.cskIcon} alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="mt-1">Most Reliable Online ID</div>
        <div className="yellow-clr bg-blue p-1 rounded mt-1">
          https://texchmaster.app/#/
        </div>
      </div>
      <div className="bg-blue rounded p-1 mt-1 d-flex align-items-center justify-content-between">
        <div className="flex-column flex-center w-50">
          <div className="w-75 d-flex align-items-center justify-content-between">
            <div className="red-bg py-1 px-3 rounded-pill">97</div>
            <div className="green-bg py-1 px-3 rounded-pill">97</div>
          </div>
          <div>Dono (Both)</div>
        </div>
        <div className="flex-center w-50">
          <div className="w-75 light-blue-bg rounded d-flex align-items-center justify-content-between">
            <span className="six-font ps-2">SIX</span>{" "}
            <span className="six-num rounded px-3">6</span>
          </div>
        </div>
      </div>
      <div className="bg-blue rounded px-1 py-2 mt-1">
        <div className="red-bg px-2 rounded-pill d-flex align-items-center justify-content-between">
          <span>50</span>
          <span>No</span>
          <span>Balls</span>
          <span>50</span>
        </div>
        <div className="green-bg px-2 rounded-pill d-flex align-items-center justify-content-between mt-2">
          <span>50</span>
          <span>No</span>
          <span>Balls</span>
          <span>50</span>
        </div>
        <div className="flex-center six-cir-mar">
          <div className="flex-column flex-center six-circle rounded-circle">
            <div>06</div>
            <div>Over</div>
          </div>
        </div>
      </div>
      <div className="bg-blue rounded font-12 mt-1">
        <div className="w-100 p-1 d-flex">
          <div className="col-4">Batsmen</div>
          <div className="col-8 d-flex align-items-center justify-content-between">
            <div>R</div>
            <div>B</div>
            <div>4s</div>
            <div>6s</div>
            <div>SR</div>
          </div>
        </div>
        <hr className="sb-line" />
        <div className="w-100 p-1 d-flex">
          <div className="col-4">Rohith</div>
          <div className="col-8 d-flex align-items-center justify-content-between">
            <div>100</div>
            <div>50</div>
            <div>10</div>
            <div>10</div>
            <div>200</div>
          </div>
        </div>
        <hr className="sb-line" />
        <div className="w-100 p-1 d-flex">
          <div className="col-4">Virat</div>
          <div className="col-8 d-flex align-items-center justify-content-between">
            <div>50</div>
            <div>40</div>
            <div>10</div>
            <div>0</div>
            <div>120</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
