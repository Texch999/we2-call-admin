import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FaLocationDot, FaTrophy } from "react-icons/fa6";
import { MdStadium } from "react-icons/md";
import Table from "../home-page/Table";
import { GoPencil } from "react-icons/go";
import MatchSubmitPopup from "../match-popups/MatchSubmitPopup";
import { GET_ALL_MATCHES } from "../../config/endpoints";
import { call } from "../../config/axios";
import ScheduleMatchesTable from "./ScheduleMatchesTable";

function SportsManagement() {
  let register_id = localStorage?.getItem("register_id");
  let account_role = localStorage?.getItem("account_role");

  const [liveMatchesData, setLiveMatchesData] = useState([]);
  const [upcomingMatchesData, setUpcomingMatchesData] = useState([]);
  const [todayMatchesData, setTodayMatchesData] = useState([]);

  const [allMatchesData, setAllMatchesData] = useState([]);
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

  const getAllMatches = async () => {
    await call(GET_ALL_MATCHES, { register_id, account_role })
      .then((res) => {
        let result = res?.data?.data;
        console.log("all matches", res?.data?.data);
        setAllMatchesData([
          ...result?.liveMatches,
          ...result?.todaysMatches,
          ...result?.upCommingMatches,
        ]);
        setLiveMatchesData(result?.liveMatches);
        setTodayMatchesData(result?.todaysMatches);
        setUpcomingMatchesData(result?.upCommingMatches);
        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

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
  const tableData =
    allMatchesData?.length &&
    allMatchesData?.map((match, index) => {
      return {
        seriesName: match?.series_name,
        team: match?.match_name,
        sportName: (
          <div>
            {match?.sport_name},{match?.gender}
          </div>
        ),
        matchPlace: (
          <div>
            {match?.game_object?.match_type},{match?.stadium},
            {match?.match_place}
          </div>
        ),
        dateTime: (
          <div>
            {match?.date}
            <br /> {match?.time}
          </div>
        ),
        editButton: <GoPencil className="edit-icon" />,
      };
    });

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
  const columns = [
    { header: "Series Name", field: "seriesName" },
    { header: "Team", field: "team" },
    { header: "Sports Name", field: "sportName" },
    { header: "Match Place", field: "matchPlace" },
    { header: "Date & Time", field: "dateTime" },
    { field: "editButton" },
  ];
  const scheduledColumns = [
    { header: "Series Name", field: "seriesName" },
    { header: "Match Name", field: "match_name" },
  ];

  const headings = ["LIVE", "TODAY", "UPCOMING"];

  const [activeHead, setActiveHead] = useState(0);

  const [scheduleDate, setScheduleDate] = useState(liveMatchesData);

  const [createMacthSubmit, setCreateMacthSubmit] = useState(false);

  const handleActiveHead = (index) => {
    setActiveHead(index);
    {
      index === 0 && setScheduleDate(liveMatchesData);
    }
    {
      index === 1 && setScheduleDate(todayMatchesData);
    }
    {
      index === 1 && setScheduleDate(upcomingMatchesData);
    }
  };

  const handleSubmitMatch = () => {
    setCreateMacthSubmit(true);
  };

  useEffect(() => {
    getAllMatches();
    setScheduleDate(liveMatchesData);
  }, []);

  console.log(liveMatchesData, "---------------heellel");

  return (
    <div className="p-3">
      <h5 className="meetings-heading">All Admins / Sports Management</h5>
      <div className="row gutter-1rem">
        <div className="col-3">
          <div className="meetings-heading">Series Name</div>
          <div className="sport-management-input d-flex ">
            <input placeholder="Enter" className="w-90" />
            <FaTrophy />
          </div>
        </div>
        {sportsDropdowns.map((item, index) => {
          return (
            <div key={index} className="col-2 meetings-heading">
              <div>{item.headName}</div>
              <select className="sport-management-input d-flex p-1 w-100 sport-management-select meetings-heading">
                {item.options}
              </select>
            </div>
          );
        })}
        <div className="col-3 meetings-heading">
          <div>Series Name</div>
          <div className="sport-management-input d-flex p-1">
            <input placeholder="Enter" className="w-90" />
            <FaLocationDot />
          </div>
        </div>
      </div>
      <div className="row gutter-1rem mt-3 meetings-heading">
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
      <div className="row gutter-1rem mt-3 meetings-heading">
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
        <div className="col-2"></div>
        <div className="col-3 d-flex align-items-end">
          <div
            className="sport-management-input w-100 d-flex justify-content-center align-items-center bg-yellow"
            onClick={() => handleSubmitMatch()}
          >
            Submit
          </div>
        </div>
      </div>
      <hr className="mt-3" />
      <div className="row gutter-1rem d-flex justify-content-around">
        <div className="col-8">
          <div className="sport-management-input meetings-heading p-2">
            <h5>Created Matches</h5>
          </div>
          <div className="mt-3 ">
            <Table data={tableData || []} columns={columns} />
            {console.log(allMatchesData, "...tabledata")}
          </div>
        </div>
        <div className="col-4 meetings-heading">
          <div className="sport-management-input p-2">
            <h5>Scheduled Matches</h5>
          </div>
          <div className="sport-management-input mt-2 d-flex">
            {headings.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    activeHead === index ? "active-head col-4 " : "col-4"
                  }
                  onClick={() => handleActiveHead(index)}
                >
                  <div className="text-center">{item}</div>
                </div>
              );
            })}
          </div>
          <div className="mt-2">
            {/* <Table data={liveMatchesData} columns={scheduledColumns} /> */}
            <ScheduleMatchesTable
              data={scheduleDate}
              columns={scheduledColumns}
            />
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
