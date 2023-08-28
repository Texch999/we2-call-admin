import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FaLocationDot, FaTrophy } from "react-icons/fa6";
import { MdStadium } from "react-icons/md";
import Table from "../home-page/Table";
import { GoPencil } from "react-icons/go";
import MatchSubmitPopup from "../match-popups/MatchSubmitPopup";

function SportsManagement() {
  const top_cricket_countries = [
    "India",
    "Australia",
    "England",
    "New Zealand",
    "Pakistan",
    "South Africa",
    "Sri Lanka",
    "West Indies",
    "Bangladesh",
    "Zimbabwe",
  ];
  const sportsDropdowns = [
    {
      headName: "Sports Name",
      options: <option>Cricket</option>,
    },
    {
      headName: "Team1",
      options: top_cricket_countries.map((item, index) => {
        return <option key={index}>{item}</option>;
      }),
    },
    {
      headName: "Team2",
      options: top_cricket_countries.map((item, index) => {
        return <option key={index}>{item}</option>;
      }),
    },
  ];
  const MatchTypeDropdown = [
    {
      heading: "Macth Type",
      cspan: "col-3",
    },
    {
      heading: "1st Inn",
      cspan: "col-2",
    },
    {
      heading: "2nd Inn",
      cspan: "col-2",
    },
  ];
  const tableData = [
    {
      seriesName: "T20 World Cup",
      team: "Newziland  vs  SriLanka",
      sportName: "Cricket, Male",
      matchPlace: "One day Amhadabad Stadium",
      dateTime: (
        <div>
          01/08/2023
          <br /> 11:46:00 AM
        </div>
      ),
      editButton: <GoPencil className="edit-icon" />,
    },
    {
      seriesName: "T20 World Cup",
      team: "Newziland  vs  SriLanka",
      sportName: "Cricket, Male",
      matchPlace: "One day Amhadabad Stadium",
      dateTime: (
        <div>
          01/08/2023
          <br /> 11:46:00 AM
        </div>
      ),
      editButton: <GoPencil className="edit-icon" />,
    },
    {
      seriesName: "T20 World Cup",
      team: "Newziland  vs  SriLanka",
      sportName: "Cricket, Male",
      matchPlace: "One day Amhadabad Stadium",
      dateTime: (
        <div>
          01/08/2023
          <br /> 11:46:00 AM
        </div>
      ),
      editButton: <GoPencil className="edit-icon" />,
    },
    {
      seriesName: "T20 World Cup",
      team: "Newziland  vs  SriLanka",
      sportName: "Cricket, Male",
      matchPlace: "One day Amhadabad Stadium",
      dateTime: (
        <div>
          01/08/2023
          <br /> 11:46:00 AM
        </div>
      ),
      editButton: <GoPencil className="edit-icon" />,
    },
  ];

  const scheduledTableData = [
    {
      seriesName: (
        <div>
          Cricket, Male
          <br /> T20 World Cup
          <br /> Oneday
          <br /> Amhadabad Stadium
          <br /> 01/08/2023
          <br />
          11:46:00 AM
        </div>
      ),
      team: "Newziland  vs  SriLanka",
      sportName: "Cricket, Male",
      matchPlace: "One day Amhadabad Stadium",
      dateTime: (
        <div>
          01/08/2023
          <br /> 11:46:00 AM
        </div>
      ),
      editButton: (
        <div>
          <GoPencil />
        </div>
      ),
    },
    {
      seriesName: "T20 World Cup",
      team: "Newziland  vs  SriLanka",
      sportName: "Cricket, Male",
      matchPlace: "One day Amhadabad Stadium",
      dateTime: (
        <div>
          01/08/2023
          <br /> 11:46:00 AM
        </div>
      ),
      editButton: (
        <div>
          <GoPencil />
        </div>
      ),
    },
  ];
  const   columns = [
    { header: "Series Name", field: "seriesName" },
    { header: "Team", field: "team" },
    { header: "Sports Name", field: "sportName" },
    { header: "Match Place", field: "matchPlace" },
    { header: "Date & Time", field: "dateTime" },
    { field: "editButton" },
  ];
  const scheduledColumns = [
    { header: "Series Name", field: "seriesName" },
    { header: "Match Name", field: "team" },
  ];

  const headings = ["LIVE", "TODAY", "UPCOMING"];

  const [activeHead, setActiveHead] = useState(0);

  const [createMacthSubmit, setCreateMacthSubmit] = useState(false);

  const handleActiveHead = (index) => {
    setActiveHead(index);
  };

  const handleSubmitMatch = () => {
    setCreateMacthSubmit(true);
  };

  return (
    <div className="p-3">
      <h5 className="meetings-heading">All Admins / Sports Management</h5>
      <div className="row gutter-1rem">
        <div className="col-3">
          <div>Series Name</div>
          <div className="sport-management-input d-flex ">
            <input placeholder="Enter" className="w-90" />
            <FaTrophy />
          </div>
        </div>
        {sportsDropdowns.map((item, index) => {
          return (
            <div key={index} className="col-2">
              <div>{item.headName}</div>
              <select className="sport-management-input d-flex p-1 w-100 sport-management-select">
                {item.options}
              </select>
            </div>
          );
        })}
        <div className="col-3">
          <div>Series Name</div>
          <div className="sport-management-input d-flex p-1">
            <input placeholder="Enter" className="w-90" />
            <FaLocationDot />
          </div>
        </div>
      </div>
      <div className="row gutter-1rem mt-3">
        <div className="col-3">
          <div>Stadium</div>
          <div className="sport-management-input d-flex p-1">
            <input placeholder="Enter" className="w-90" />
            <MdStadium />
          </div>
        </div>
        <div className="col-2">
          <div>Gender</div>
          <div className="sport-management-input d-flex p-1">
            <select className="sport-management-input d-flex p-1 w-100 sport-management-select">
              <option>Male</option>
              <option>FeMale</option>
            </select>
          </div>
        </div>
        <div className="col-2">
          <div>Date</div>
          <div className="sport-management-input d-flex p-1">
            <input className="w-100 m-auto" type="date"></input>
          </div>
        </div>
        <div className="col-2">
          <div>Time</div>
          <div className="sport-management-input d-flex p-1">
            <input className="w-100 m-auto" type="time"></input>
          </div>
        </div>
      </div>
      <div className="row gutter-1rem mt-3">
        {MatchTypeDropdown.map((item, index) => {
          return (
            <div className={item.cspan}>
              <div>{item.heading}</div>
              <div className="sport-management-input d-flex p-1">
                <div className="w-90">Enter</div>
                <BsChevronDown />
              </div>
            </div>
          );
        })}
        <div className="col-5 d-flex align-items-end">
          <div
            className="sport-management-input w-100 d-flex justify-content-center align-items-center bg-yellow"
            onClick={() => handleSubmitMatch()}
          >
            Submit
          </div>
        </div>
      </div>
      <hr className="mt-3" />
      <div className="row p-3 gutter-2rem">
        <div className="col-8">
          <div className="row sport-management-input ">
            <h5>Created Matches</h5>
          </div>
          <div className="mt-3">
            <Table data={tableData} columns={columns} />
          </div>
        </div>
        <div className="col-4">
          <div className="row sport-management-input">
            <h5>Scheduled Matches</h5>
          </div>
          <div className="row sport-management-input mt-2">
            {headings.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    activeHead === index ? "active-head col-4" : "col-4"
                  }
                  onClick={() => handleActiveHead(index)}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div className="mt-2">
            <Table data={scheduledTableData} columns={scheduledColumns} />
          </div>
          <MatchSubmitPopup
            header={"You Are Successfully Created Your Match"}
            state={createMacthSubmit}
            setState={setCreateMacthSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default SportsManagement;
