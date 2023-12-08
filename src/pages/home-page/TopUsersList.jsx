import React, { useEffect, useState } from "react";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { TOP_WINNERS_LOOSERS } from "../../config/endpoints";
import { call } from "../../config/axios";

function TopUsersList() {
  const register_id = localStorage?.getItem("register_id");
  const [topWinners, setTopWinners] = useState({});

  const getAllWinners = async () => {
    await call(TOP_WINNERS_LOOSERS, {
      register_id: register_id,
      startDate: "01aug2023",
      endDate: "08dec2023",
      topclient: "winner",
    })
      .then((res) => {
        let result = res;
        setTopWinners(result);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllWinners();
  }, []);
  console.log(topWinners, "TOP_WINNERS");

  const summaryContent = [
    {
      users: "USER1",
      count: "500000",
    },
    {
      users: "USER1",
      count: "500000",
    },
    {
      users: "USER1",
      count: "500000",
    },
  ];
  return (
    <div className="row meet-box-height ">
      <div className="col-6 p-2 ">
        <div className="meetings-container p-3">
          <div className="row  align-center mb-3 ">
            <h5 className="col-9 meetings-heading">Top Winners</h5>
            <select className="col-3 d-flex align-items-center justify-content-center see-all">
              <option value="">Today</option>
              <option value="">This Week</option>
              <option value="">This Month</option>
            </select>
          </div>
          {summaryContent.map((item, index) => {
            return (
              <div key={index} className="w-100 summary-line d-flex">
                <h6 className="meetings-heading">{item.users}</h6>
                <h6 className="meetings-heading">{item.count}</h6>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-6 p-2 ">
        <div className="meetings-container p-3">
          <div className="row  align-center mb-3">
            <h5 className="col-9 meetings-heading">Top Lossers</h5>
            <select className="col-3 d-flex align-items-center justify-content-center see-all">
              <option value="">Today</option>
              <option value="">This Week</option>
              <option value="">This Month</option>
            </select>
          </div>
          {summaryContent.map((item, index) => {
            return (
              <div key={index} className="w-100 summary-line d-flex">
                <h6 className="meetings-heading">{item.users}</h6>
                <h6 className="meetings-heading">{item.count}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopUsersList;
