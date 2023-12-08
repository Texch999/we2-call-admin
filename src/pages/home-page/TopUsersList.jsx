import React, { useEffect, useState } from "react";
import { TOP_WINNERS_LOOSERS } from "../../config/endpoints";
import { call } from "../../config/axios";

function TopUsersList() {
  const register_id = localStorage?.getItem("register_id");
  const [topWinners, setTopWinners] = useState([]);
  const [topLoosers, setTopLoosers] = useState([]);
  const [winnersFilter, setWinnerFilter] = useState("all");
  const [looserFilter, setLooserFilter] = useState("all");
  const handleWinnerChange = (e) => {
    setWinnerFilter(e.target.value);
  };
  const handleLooserChange = (e) => {
    setLooserFilter(e.target.value);
  };

  const getAllWinners = async () => {
    await call(TOP_WINNERS_LOOSERS, {
      register_id: register_id,
      duration: winnersFilter,
      amountfilter: null,
      topclient: "winner",
    })
      .then((res) => {
        let result = res?.data;
        setTopWinners(result);
      })
      .catch((err) => console.log(err));
  };

  const getAllLoosers = async () => {
    await call(TOP_WINNERS_LOOSERS, {
      register_id: register_id,
      duration: looserFilter,
      amountfilter: null,
      topclient: "looser",
    })
      .then((res) => {
        let result = res?.data;
        setTopLoosers(result);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllWinners();
    getAllLoosers();
  }, []);

  return (
    <div className="row meet-box-height ">
      <div className="col-6 p-2 ">
        <div className="meetings-container p-3">
          <div className="row  align-center mb-3 ">
            <h5 className="col-9 meetings-heading">Top Winners</h5>
            <select
              className="col-3 d-flex align-items-center justify-content-center see-all"
              value={winnersFilter}
              onChange={(e) => handleWinnerChange(e)}
            >
              <option value="">Select</option>
              <option value="today">Today</option>
              <option value="last7days">This Week</option>
              <option value="thismonth">This Month</option>
            </select>
          </div>
          {topWinners?.length > 0 &&
            topWinners?.map((item, index) => {
              return (
                <div key={index} className="w-100 summary-line d-flex">
                  <h6 className="meetings-heading">{item?.username}</h6>
                  <h6 className="meetings-heading">{item?.amount}</h6>
                </div>
              );
            })}
        </div>
      </div>
      <div className="col-6 p-2 ">
        <div className="meetings-container p-3">
          <div className="row  align-center mb-3">
            <h5 className="col-9 meetings-heading">Top Lossers</h5>
            <select
              className="col-3 d-flex align-items-center justify-content-center see-all"
              value={looserFilter}
              onChange={(e) => handleLooserChange(e)}
            >
              <option value="">Select</option>
              <option value="today">Today</option>
              <option value="last7days">This Week</option>
              <option value="thismonth">This Month</option>
            </select>
          </div>
          {topLoosers?.length > 0 &&
            topLoosers?.map((item, index) => {
              return (
                <div key={index} className="w-100 summary-line d-flex">
                  <h6 className="meetings-heading">{item?.username}</h6>
                  <h6 className="meetings-heading">{item?.amount}</h6>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default TopUsersList;
