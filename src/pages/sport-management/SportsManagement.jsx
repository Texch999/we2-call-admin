import React, { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FaLocationDot, FaTrophy } from "react-icons/fa6";
import { MdStadium } from "react-icons/md";
import Table from "../home-page/Table";
import { GoPencil } from "react-icons/go";
import MatchSubmitPopup from "../match-popups/MatchSubmitPopup";
import {
  GET_ALL_MATCHES,
  CREATE_OFFLINE_MATCH,
  UPDATE_MATCH,
} from "../../config/endpoints";
import { call } from "../../config/axios";
import ScheduleMatchesTable from "./ScheduleMatchesTable";

function SportsManagement() {
  let register_id = localStorage?.getItem("register_id");
  let account_role = localStorage?.getItem("account_role");

  const [liveMatchesData, setLiveMatchesData] = useState([]);
  const [upcomingMatchesData, setUpcomingMatchesData] = useState([]);
  const [todayMatchesData, setTodayMatchesData] = useState([]);
  const [allMatchesData, setAllMatchesData] = useState([]);
  const [matchData, setMatchData] = useState({});
  const top_cricket_countries = [
    "India",
    "England",
    "Zimbabwe",
    "Pakistan",
    "Australia",
    "Sri Lanka",
    "Bangladesh",
    "Afganisthan",
    "West Indies",
    "New Zealand",
    "South Africa",
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
      })
      .catch((err) => console.log(err));
  };

  const [typeOfMatch, setTypeOfMatch] = useState();

  const matchType = [
    { name: "T10", first: [1, 4, 5], second: [2, 3] },
    { name: "T20", first: [1, 4, 5], second: [2, 3] },
    { name: "ODI", first: [1, 4, 5, 6, 9], second: [2] },
    { name: "TEST", first: [], second: [] },
  ];

  const sportsDropdowns = [
    {
      headName: "Sports Name",
      name: "sport_name",
      options: (
        <>
          <option value="cricket">Cricket</option>
          <option value="football">FootBall</option>
        </>
      ),
    },
    {
      headName: "Team1",
      name: "team1",
      options: top_cricket_countries.map((item, index) => {
        return (
          <option key={index} value={item || ""}>
            {item}
          </option>
        );
      }),
    },
    {
      headName: "Team2",
      name: "team2",
      options: top_cricket_countries.map((item, index) => {
        return <option value={item || ""}>{item}</option>;
      }),
    },
  ];

  const MatchTypeDropdown = [
    {
      heading: "1st Inn",
      cspan: "col-2",
      name: "match_fancy_first",
      overs:
        matchData?.macth_Type === "T10"
          ? [1, 5, 8, 10]
          : matchData?.macth_Type === "T20"
          ? [1, 5, 8, 10, 15]
          : matchData?.macth_Type === "ODI"
          ? [1, 5, 8, 10, 20, 30]
          : "",
    },
    {
      heading: "2nd Inn",
      cspan: "col-2",
      name: "match_fancy_second",
      overs:
        matchData?.macth_Type === "T10"
          ? [1, 5]
          : matchData?.macth_Type === "T20"
          ? [1, 10]
          : matchData?.macth_Type === "ODI"
          ? [1, 5, 8, 10]
          : "",
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
            {match?.sport_name},{match?.gender},
            <br />
            {match?.game_object?.match_type}
          </div>
        ),
        matchPlace: (
          <div>
            <br />
            {match?.stadium}
            <br />
            {match?.match_place}
          </div>
        ),
        dateTime: (
          <div>
            {match?.date}
            <br /> {match?.time}
          </div>
        ),
        editButton: (
          <GoPencil
            className="edit-icon"
            onClick={() => handleUpadate(match)}
          />
        ),
      };
    });

  // const scheduledTableData = [
  //   {
  //     seriesName: (
  //       <div>
  //         Cricket, Male
  //         <br /> T20 World Cup
  //         <br /> Oneday
  //         <br /> Amhadabad Stadium
  //         <br /> 01/08/2023
  //         <br />
  //         11:46:00 AM
  //       </div>
  //     ),
  //     team: "Newziland  vs  SriLanka",
  //     sportName: "Cricket, Male",
  //     matchPlace: "One day Amhadabad Stadium",
  //     dateTime: (
  //       <div>
  //         01/08/2023
  //         <br /> 11:46:00 AM
  //       </div>
  //     ),
  //     editButton: (
  //       <div>
  //         <GoPencil />
  //       </div>
  //     ),
  //   },
  //   {
  //     seriesName: "T20 World Cup",
  //     team: "Newziland  vs  SriLanka",
  //     sportName: "Cricket, Male",
  //     matchPlace: "One day Amhadabad Stadium",
  //     dateTime: (
  //       <div>
  //         01/08/2023
  //         <br /> 11:46:00 AM
  //       </div>
  //     ),
  //     editButton: (
  //       <div>
  //         <GoPencil />
  //       </div>
  //     ),
  //   },
  // ];
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

  const [error, setError] = useState();

  const [isProcessing, setIsProcessing] = useState();

  const [status, setStatus] = useState(false);

  const [inns, setInns] = useState([]);

  const handleActiveHead = (index) => {
    setActiveHead(index);
    {
      index === 0 && setScheduleDate(liveMatchesData);
    }
    {
      index === 1 && setScheduleDate(todayMatchesData);
    }
    {
      index === 2 && setScheduleDate(upcomingMatchesData);
    }
  };

  // const handleSubmitMatch = () => {
  //   setCreateMacthSubmit(true);
  // };
  const handleMacthSubmit = async () => {
    console.log("subit click");
    if (
      !matchData?.series_name ||
      !matchData?.sport_name ||
      !matchData?.team1 ||
      !matchData?.team2 ||
      !matchData?.match_place ||
      !matchData?.stadium ||
      !matchData?.gender ||
      !matchData?.date ||
      !matchData?.time ||
      !matchData?.macth_Type
    ) {
      return setError("Please enter required fields");
    }
    setIsProcessing(true);
    setError("");
    await call(CREATE_OFFLINE_MATCH, {
      register_id,
      account_role,
      // match_id: matchDetails?.match_id,
      ...matchData,
      team1: matchData?.team1,
      team2: matchData?.team2,
      gender: matchData?.gender === "Female" ? "F" : "M",
      sport_name: matchData?.sport_name,
      game_object: {
        first_innings_fancy_overs: matchData?.match_fancy_first,
        second_innings_fancy_overs: matchData?.match_fancy_first,
        match_type: matchData.macth_Type,
      },
    })
      .then((res) => {
        setIsProcessing(false);
        if (res?.data?.statusCode === 200) {
          setStatus((prev) => !prev);
          setCreateMacthSubmit(true);
          setTimeout(() => {
            setCreateMacthSubmit(false);
          }, 1000);
          handleResetFields();
        } else {
          setError(
            res?.data?.message ? res?.data?.message : `something wen't wrong`
          );
        }
      })
      .catch((err) => {
        setIsProcessing(false);
        setError(err?.message ? err.message : `something wen't wrong`);
        console.log(err);
      });
  };

  const handleResetFields = () => {
    setMatchData({});
  };

  const handleUpadate = (item) => {
    setMatchData(item);
    console.log(item, "..........itemEdit");
  };

  const handleChange = (e) => {
    setMatchData({ ...matchData, [e.target.name]: e.target.value });
    console.log(e.target.value, ".....events");
  };
  useEffect(() => {
    getAllMatches();
    setScheduleDate(liveMatchesData);
  }, []);

  console.log(matchData, ".....matchData");
  console.log(allMatchesData, ".......scheduleDate");
  // console.log(inns, ".....inns");

  return (
    <div className="p-3">
      <h5 className="meetings-heading">All Admins / Sports Management</h5>
      <div className="row gutter-1rem">
        <div className="col-3">
          <div className="meetings-heading">Series Name</div>
          <div className="sport-management-input d-flex ">
            <input
              placeholder="Enter"
              className="w-90"
              name="series_name"
              id="series_name"
              value={matchData[matchData?.series_name || ""]}
              onChange={(e) => handleChange(e)}
            />
            <FaTrophy />
          </div>
        </div>
        {sportsDropdowns.map((item, index) => {
          return (
            <div key={index} className="col-2 meetings-heading">
              <div>{item.headName}</div>
              <select
                className="sport-management-input d-flex p-1 w-100 sport-management-select meetings-heading"
                onChange={(e) => handleChange(e)}
                name={item.name}
              >
                <option>select</option>
                {item.options}
              </select>
            </div>
          );
        })}
        <div className="col-3 meetings-heading">
          <div>Match Place</div>
          <div className="sport-management-input d-flex p-1">
            <input
              placeholder="Enter"
              className="w-90"
              type="text"
              name="match_place"
              id="match_place"
              value={matchData[matchData?.match_place || ""]}
              onChange={(e) => handleChange(e)}
            />
            <FaLocationDot />
          </div>
        </div>
      </div>
      <div className="row gutter-1rem mt-3 meetings-heading">
        <div className="col-3">
          <div>Stadium</div>
          <div className="sport-management-input d-flex p-1">
            <input
              placeholder="Enter"
              className="w-90"
              name="stadium"
              id="stadium"
              value={matchData[matchData?.stadium || ""]}
              onChange={(e) => handleChange(e)}
            />
            <MdStadium />
          </div>
        </div>
        <div className="col-2">
          <div>Gender</div>
          <div className="sport-management-input d-flex p-1">
            <select
              className="sport-management-input d-flex p-1 w-100 sport-management-select"
              name="gender"
              onChange={(e) => handleChange(e)}
            >
              <option value={matchData[matchData?.gender || "male"]}>
                Male
              </option>
              <option value={matchData[matchData?.gender || "feMale"]}>
                FeMale
              </option>
            </select>
          </div>
        </div>
        <div className="col-2">
          <div>Date</div>
          <div className="sport-management-input d-flex p-1">
            <input
              className="w-100 m-auto"
              type="date"
              name="date"
              defaultValue={matchData[matchData?.date || ""]}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
        </div>
        <div className="col-2">
          <div>Time</div>
          <div className="sport-management-input d-flex p-1">
            <input
              className="w-100 m-auto"
              type="time"
              name="time"
              defaultValue={matchData[matchData?.time || ""]}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
        </div>
      </div>
      <div className="row gutter-1rem mt-3 meetings-heading">
        <div className="col-3">
          <div>Macth Type</div>
          <div className="sport-management-input d-flex p-1">
            <select
              className="sport-management-input d-flex p-1 w-100 sport-management-select"
              name="macth_Type"
              onChange={(e) => handleChange(e)}
            >
              {matchType.map((item, index) => {
                return <option value={item.name}>{item.name}</option>;
              })}
            </select>
          </div>
        </div>
        {MatchTypeDropdown.map((item, index) => {
          return (
            <div className={item.cspan}>
              <div>{item.heading}</div>
              <input
                className="sport-management-input d-flex p-1 w-100"
                value={item.overs || []}
                name={item.name}
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
          );
        })}
        <div className="col-2"></div>
        <div className="col-3 d-flex align-items-end">
          <div
            className="sport-management-input w-100 d-flex justify-content-center align-items-center bg-yellow"
            onClick={() => handleMacthSubmit()}
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
