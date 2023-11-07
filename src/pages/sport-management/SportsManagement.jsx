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
  // UPDATE_MATCH,
} from "../../config/endpoints";
import { call } from "../../config/axios";

function SportsManagement() {
  let register_id = localStorage?.getItem("register_id");
  let account_role = localStorage?.getItem("account_role");

  // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓  Create Match Related ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ //

  const [matchData, setMatchData] = useState({});
  const [selectMatchType, setSelectMatchType] = useState({});
  const [createMacthSubmit, setCreateMacthSubmit] = useState(false);
  const [Error, setError] = useState();
  const [isProcessing, setIsProcessing] = useState();
  const [status, setStatus] = useState(false);

  const top_cricket_countries = [
    "IND",
    "AUS",
    "ENG",
    "PAK",
    "SA",
    "NZ",
    "SL",
    "WI",
    "BAN",
    "AFG",
  ];

  const matchType = [
    { name: "T10", first: [1, 4, 5], second: [2, 3] },
    { name: "T20", first: [1, 4, 5], second: [2, 3] },
    { name: "ODI", first: [1, 4, 5, 6, 9], second: [2] },
    { name: "TEST", first: [], second: [] },
  ];

  const selectOvers = matchType.filter(
    (i) => i.name === selectMatchType?.macth_type
  );

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
  ];

  const sportsInputs = [
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
      options: top_cricket_countries
        ?.filter((country) => country !== matchData?.team1)
        .map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        }),
    },
  ];

  const MatchTypeDropdown = [
    {
      heading: "1st Inn",
      cspan: "col",
      name: "first_fancy",
      overs: selectOvers[0]?.first,
    },
    {
      heading: "2nd Inn",
      cspan: "col",
      name: "second_fancy",
      overs: selectOvers[0]?.second,
    },
  ];

  const handleMacthSubmit = async () => {
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
      !selectMatchType.match_type
    ) {
      return setError("Please enter required fields");
    }
    setIsProcessing(true);
    setError("");
    await call(CREATE_OFFLINE_MATCH, {
      register_id,
      account_role,
      ...matchData,
      team1: matchData?.team1,
      team2: matchData?.team2,
      gender: matchData?.gender === "Female" ? "F" : "M",
      sport_name: matchData?.sport_name,
      game_object: {
        first_innings_fancy_overs: selectOvers[0]?.first,
        second_innings_fancy_overs: selectOvers[0]?.second,
        match_type: selectMatchType.macth_type,
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
  };

  const handleChange = (e) => {
    setMatchData({ ...matchData, [e.target.name]: e.target.value });
  };

  const handleMatchChange = (e) => {
    setSelectMatchType({ [e.target.name]: e.target.value });
  };

  // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑  Create Match Related ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ //

  // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓  getting Table data && table related UI maps ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ //

  const [liveMatchesData, setLiveMatchesData] = useState([]);
  const [upcomingMatchesData, setUpcomingMatchesData] = useState([]);
  const [todayMatchesData, setTodayMatchesData] = useState([]);
  const [allMatchesData, setAllMatchesData] = useState([]);
  const headings = ["LIVE", "TODAY", "UPCOMING"];
  const [activeHead, setActiveHead] = useState(0);
  const [scheduleDate, setScheduleDate] = useState(liveMatchesData);

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

  const getAllMatches = async () => {
    await call(GET_ALL_MATCHES, { register_id, account_role })
      .then((res) => {
        let result = res?.data?.data;
        setAllMatchesData([
          ...result?.liveMatches,
          ...result?.todaysMatches,
          ...result?.upCommingMatches,
        ]);
      })
      .catch((err) => console.log(err));
  };

  const getScheduleMatches = async () => {
    await call(GET_ALL_MATCHES, {
      register_id: "company",
      account_role: "company",
    })
      .then((res) => {
        let result = res?.data?.data;
        setLiveMatchesData(result?.liveMatches);
        setTodayMatchesData(result?.todaysMatches);
        setUpcomingMatchesData(result?.upCommingMatches);
      })
      .catch((err) => console.log(err));
  };

  const columns = [
    { header: "Series Name", field: "seriesName" },
    { header: "Team", field: "team" },
    { header: "Sports Name", field: "sportName" },
    { header: "Match Place", field: "matchPlace" },
    { header: "Date & Time", field: "dateTime" },
    { field: "editButton" },
  ];

  const tableData =
    allMatchesData?.length > 0 &&
    allMatchesData?.map((match) => ({
      seriesName: match?.series_name,
      team: <span className="role-color">{match?.match_name}</span>,
      sportName: match?.sport_name,
      matchPlace: match?.match_place,
      dateTime: (
        <div>
          {match?.date} <br /> <span>{match?.time}</span>{" "}
        </div>
      ),
      editButton: (
        <GoPencil className="edit-icon" onClick={() => handleUpadate(match)} />
      ),
    }));

  const scheduledColumns = [
    { header: "Series Name", field: "series_name" },
    { header: "Match Name", field: "match_name" },
  ];


  const scheduleTable = liveMatchesData.map((item) => {
    return {
      series_name: (
        <div>
          {item.match_name},{item.gender}
          <br />
          {item.game_object.match_type},{item.stadium}
          <br />
          <div className="clr-yellow">
            {item.date},{item.time}
          </div>
        </div>
      ),
      match_name: item.match_name,
    };
  });

  // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑  getting Table data && table related UI maps ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ //

  useEffect(() => {
    getAllMatches();
    getScheduleMatches();
    setActiveHead(0);
  }, []);

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
              value={matchData?.series_name}
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
                name={item?.name}
                // multiple
              >
                <option>select</option>
                {item.options}
              </select>
            </div>
          );
        })}
        {sportsInputs.map((item, index) => {
          return (
            <div key={index} className="col-2 meetings-heading">
              <div>{item.headName}</div>
              <input
                className="sport-management-input d-flex p-1 w-100 sport-management-select meetings-heading"
                onChange={(e) => handleChange(e)}
                name={item?.name}
                value={matchData?.item?.name}
              ></input>
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
              value={matchData?.match_place}
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
              value={matchData?.stadium}
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
              <option value={matchData?.gender}>Male</option>
              <option value={matchData?.gender}>FeMale</option>
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
              defaultValue={matchData?.date}
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
              defaultValue={matchData?.time}
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
              name="macth_type"
              onChange={(e) => handleMatchChange(e)}
            >
              <option value="select">select</option>
              <option value="T10">T10</option>
              <option value="T20">T20</option>
              <option value="ODI">ODI</option>
              <option value="TEST">TEST</option>
            </select>
          </div>
        </div>
        {MatchTypeDropdown.map((item, index) => {
          return (
            <div className={item.cspan}>
              <div>{item.heading}</div>
              <input
                className="sport-management-input d-flex p-1 w-100 sport-management-select meetings-heading"
                name={item.name}
                value={item.overs}
                // disabled
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
          );
        })}
        <div className="col-2"></div>
        <div className="col-3 d-flex align-items-end">
          {Error && <div className="danger">{Error}</div>}
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
            <Table data={scheduleTable || []} columns={scheduledColumns} />
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
