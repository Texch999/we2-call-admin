import React from "react";
// import "./Styles.css";
import { BsArrowDownCircle } from "react-icons/bs";
import { numberColor } from "../../../utils/helpers";

function VideoCallMatchPosition() {
  const winning = 10000;
  const losing = -10000;
  const bowlingStatsHeader = () => {
    return (
      <div className="display-flex-property display-space-around-property ">
        <p className="text-center">
          INDIA
          <br />
          <span
            className={`${numberColor(winning)} match-position-table-header`}
          >
            {winning}
          </span>
        </p>
        <p className="text-center">
          AUSTRALIA
          <br />
          <span
            className={`${numberColor(losing)} match-position-table-header`}
          >
            {losing}
          </span>
        </p>
      </div>
    );
  };
  const fancyOvers = [
    {
      overs: "6 over",
      amount: "-500000",
    },
    {
      overs: "10 over",
      amount: "+500000",
    },
    {
      overs: "15 over",
      amount: "-500000",
    },
    {
      overs: "13 over",
      amount: "+500000",
    },
    {
      overs: "15 over",
      amount: "+500000",
    },
    {
      overs: "18 over",
      amount: "+500000",
    },
  ];
  const matchFancys = () => {
    return (
      <div className="display-flex-property">
        <div className="fancy-innings">1st Inn</div>
        <div id="fancy-header" className="display-flex-property">
          {fancyOvers.map((value, index) => (
            <div key={index} className="text-center mr-10">
              {value.overs}
              <br />
              <span className={`${numberColor(value.amount)} font-bold`}>
                {value.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  const bowlingStats = [
    {
      title: "SNo",
      dataIndex: "sno",
      key: "sno",
    },
    {
      title: "Team",
      dataIndex: "teamname",
      key: "teamname",
    },
    {
      title: "P/E",
      dataIndex: "playeat",
      key: "palyeat",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
  ];
  const bowlerPerformance = [
    {
      key: "1",
      sno: "5",
      teamname: "IND",
      playeat: "P",
      amount: "10000",
    },
    {
      key: "2",
      sno: "7",
      teamname: "AUS",
      playeat: "E",
      amount: "90000",
    },
    {
      key: "3",
      sno: "10",
      teamname: "IND",
      playeat: "p",
      amount: "12000",
    },
    {
      key: "4",
      sno: "23",
      teamname: "AUS",
      playeat: "E",
      amount: "90000",
    },
  ];
  return (
    <div className="video-call-tables">
      <div className="bowler-table">
        <div className="vc-match-position-container display-flex-property display-space-around-property">
          {localStorage.getItem("aliasName")}-Match Position{" "}
          <BsArrowDownCircle />
        </div>
        {/* <Table
          title={bowlingStatsHeader}
          pagination={false}
          columns={bowlingStats}
          dataSource={bowlerPerformance}
          sticky
          scroll={{ y: 65}}
        /> */}
      </div>
      <div className="bowler-table">
        <div className="vc-match-position-container display-flex-property display-space-around-property">
          Fancy P/L{" "}
          <div className={`${numberColor(winning)} font-bold`}>{winning}</div>{" "}
          <BsArrowDownCircle />
        </div>
        {/* <Table
          title={matchFancys}
          pagination={false}
          columns={bowlingStats}
          dataSource={bowlerPerformance}
          sticky
          scroll={{ y: 65}}
        /> */}
      </div>
    </div>
  );
}

export default VideoCallMatchPosition;
