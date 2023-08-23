import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import "./styles.css";
import FinancialPopupStatement from "./FinancialPopupStatement";

function FinancialStatement() {
  const FINANCIAL_STATEMENT_DETAILS = [
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
  const [showFinancialModal, setShowFinancialModal] = useState(false);
  const handleFinancialModalShow = () => setShowFinancialModal(true);
  return (
    <div className="p-2">
      <hr />
      <div className="d-flex flex-row justify-content-around mb-2 w-80">
        <div>
          <div className="medium-font mb-2">From</div>
          <div className="date-container d-flex justify-content-around align-items-center rounded">
            <input className="login-inputs medium-font" type="date"></input>
          </div>
        </div>
        <div>
          <div className="medium-font mb-2">To</div>
          <div className="date-container d-flex justify-content-around align-items-center rounded">
            <input type="date" className="login-inputs medium-font"></input>
          </div>
        </div>
        <div>
          <div className="medium-font mb-2">Series Name</div>

          <select
            name="cars"
            className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
          >
            <option selected>Enter Series Name</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div>
          <div className="medium-font mb-2">Match Name</div>
          <select
            name="cars"
            className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
          >
            <option selected>Enter Match Name</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <button className="submit-button mt-3 medium-font all-none">
          Verify
        </button>
      </div>
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
        {FINANCIAL_STATEMENT_DETAILS.map((item, index) => (
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
                  className="custom-icon"
                  onClick={() => handleFinancialModalShow()}
                />
              </td>
            </tr>
          </tbody>
        ))}
        <tfoot>
          <tr className="text-center">
            <th colSpan={4}>TOTAL</th>
            <th colSpan={3}>50000000.00</th>
          </tr>
        </tfoot>
      </table>
      <FinancialPopupStatement
        showFinancialModal={showFinancialModal}
        setShowFinancialModal={setShowFinancialModal}
      />
    </div>
  );
}

export default FinancialStatement;
