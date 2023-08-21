import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { Button, Table, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdModeEditOutline, MdArrowDownward } from "react-icons/md";
import "./styles.css";

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
  return (
    <div className="p-2">
      <div className="d-flex flex-row justify-content-around mb-4 w-100">
        <div>
          <div className="medium-font mb-2">From</div>
          <div className="date-container d-flex justify-content-around align-items-center">
            <input className="login-inputs " type="date"></input>
            <FaCalendarAlt className="custom-icon"></FaCalendarAlt>
          </div>
        </div>
        <div>
          <div className="medium-font mb-2">To</div>
          <div className="date-container d-flex justify-content-around align-items-center">
            <input type="date" className="login-inputs"></input>
            <FaCalendarAlt className="custom-icon"></FaCalendarAlt>
          </div>
        </div>
        <div>
          <div className="medium-font mb-2">Series Name</div>
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-custom-components"
              className="button-container medium-font p-2
              "
            >
              Enter Series Name
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-item-statement">
              <Dropdown.Item eventKey="1" className="clr-white small-font">
                Demo
              </Dropdown.Item>
              <Dropdown.Item eventKey="2" className="clr-white small-font">
                Demo
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div>
          <div className="medium-font mb-2">Match Name</div>
          <div className="statement-container matchstatement-container d-flex justify-content-between align-items-center p-4">
            <div className="medium-font d-flex justify-content-start placeholder-text ">
              Select match
            </div>
            <RiArrowDropDownLine className="custom-icon clr-white" />
          </div>
        </div>
        <div>
          <div className="medium-font mb-2">Fancy</div>
          <div className="statement-container matchstatement-container d-flex justify-content-between align-items-center p-4">
            <div className="medium-font d-flex justify-content-start placeholder-text ">
              Fancy
            </div>
            <RiArrowDropDownLine className="custom-icon clr-white" />
          </div>
        </div>
        <div>
          <div className="medium-font mb-2">Client Name</div>
          <div className="statement-container matchstatement-container d-flex justify-content-between align-items-center p-4">
            <div className="medium-font d-flex justify-content-start placeholder-text ">
              Select
            </div>
            <RiArrowDropDownLine className="custom-icon clr-white" />
          </div>
        </div>
        <button className="submit-button mt-3 medium-font">Verify</button>
      </div>
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
                <AiFillEdit className="custom-icon" />
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
    </div>
  );
}

export default Statement;
