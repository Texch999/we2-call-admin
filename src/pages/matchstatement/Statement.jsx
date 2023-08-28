import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import "./styles.css";
import StatementPopup from "./StatementPopup";
function Statement() {
  const STATEMENT_DETAILS = [
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
    {
      datetime: "19 July 2023, 10:00:00 PM",
      series: "T20 World Cup 2023",
      team: "India vs England",
      matchplace: "Hyderabad",
      winteam: "India",
      pl: "50000000",
    },
  ];
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="p-2">
      <hr />
      <div className="d-flex flex-row justify-content-around mb-3 w-100 ">
        <div>
          <div className="medium-font mb-2">From</div>
          <div className="date-container d-flex justify-content-around align-items-center rounded p-2">
            <input
              className="login-inputs medium-font"
              type="date"
              pattern="\d{4}-\d{2}-\d{2}"
            ></input>
          </div>
        </div>
        <div>
          <div className="medium-font mb-2">To</div>
          <div className="date-container d-flex justify-content-around align-items-center rounded p-2">
            <input type="date" className="login-inputs medium-font"></input>
          </div>
        </div>
        <div>
          <div className="medium-font mb-2">Series Name</div>
          <select
            name="Series"
            className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
          >
            <option selected>Enter Series Name</option>
            <option value="test">Test</option>
            <option value="t20">T20 League</option>
            <option value="oneday">ODI Cricket</option>
          </select>
        </div>
        <div>
          <div className="medium-font mb-2">Match Name</div>
          <select
            name="match"
            className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
          >
            <option selected>Enter Match Name</option>
            <option value="sl">India vs SL</option>
            <option value="eng">India vs Eng</option>
            <option value="zim">Eng vs Zim</option>
            <option value="pak">India Vs Pak</option>
          </select>
        </div>
        <div>
          <div className="medium-font mb-2"> Fancy</div>
          <select
            name="fancy"
            className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
          >
            <option selected>Enter Fancy</option>
            <option value="first">1st Innings</option>
            <option value="second">2nd Innings</option>
          </select>
        </div>
        <div>
          <div className="medium-font mb-2">Client Name</div>
          <select
            name="cars"
            className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
          >
            <option selected>Enter Client Name</option>
            <option value="sri">Srikanth</option>
            <option value="upi">Upendra</option>
            <option value="ranj">Ranjit katari</option>
          </select>
        </div>
        <button className="submit-button mt-3 medium-font p-2 rounded all-none">
          Verify
        </button>
      </div>{" "}
      <hr />
      <table className="w-100 match-position-table medium-font">
        <thead>
          <tr className="text-center">
            <th>DATE & TIME</th>
            <th>SERIES NAME</th>
            <th>TEAM NAME</th>
            <th>MATCH PLACE</th>
            <th>WIN TEAM</th>
            <th>P/L</th>
            <th></th>
          </tr>
        </thead>
        {STATEMENT_DETAILS.map((item, index) => (
          <tbody key={index}>
            <tr className="text-center">
              <td>{item.datetime}</td>
              <td>{item.series}</td>
              <td>{item.team}</td>
              <td className="clr-green"> {item.matchplace}</td>
              <td className="clr-green"> {item.winteam}</td>
              <td className="clr-green"> {item.pl}</td>
              <td>
                <AiFillEdit
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                  className="custom-icon"
                  onClick={() => handleShow()}
                />
              </td>
            </tr>
          </tbody>
        ))}
        <tfoot>
          <tr className="text-center clr-green">
            <th colSpan={5} className="text-end">
              TOTAL
            </th>
            <th className="text-center" colSpan={2}>
              50000000.00
            </th>
          </tr>
        </tfoot>
      </table>
      <StatementPopup showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}

export default Statement;
