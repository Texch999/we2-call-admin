import React, { useEffect, useState } from "react";
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

function SportsManagement() {
  let register_id = localStorage?.getItem("register_id");
  let account_role = localStorage?.getItem("account_role");

  const [matchData, setMatchData] = useState({});
  const [createMacthSubmit, setCreateMacthSubmit] = useState(false);
  const [error, setError] = useState();
  const [isProcessing, setIsProcessing] = useState();
  const [status, setStatus] = useState(false);
  const [oversChange, setOversChange] = useState({});
  const [IsMatchEditing, setIsMatchEditing] = useState(false);
  const [matchId, setMatchId] = useState();

  const matchType = [
    { name: "T10", first: [1, 4, 5], second: [2, 3] },
    { name: "T20", first: [1, 4, 5], second: [2, 3] },
    { name: "ODI", first: [1, 4, 5, 6, 9], second: [2] },
    { name: "TEST", first: [], second: [] },
  ];

  const selectOvers = matchType.filter((i) => i.name === matchData?.macth_type);

  const handleOversChange = (e) => {
    setOversChange({ [e.target.name]: e.target.value });
    if (e.target.name === "first_fancy") {
    }
  };

  const [typeOfMatch, setTypeOfMatch] = useState();

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
    },
    {
      headName: "Team2",
      name: "team2",
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
      !matchData.macth_type
    ) {
      return setError("Please Enter Required Fields");
    }
    setIsProcessing(true);
    setError("");

    await call(CREATE_OFFLINE_MATCH, {
      register_id,
      account_role,
      series_name: matchData?.series_name,
      match_place: matchData?.match_place,
      stadium: matchData?.stadium,
      time: matchData?.time,
      date: matchData?.date,
      team1: matchData?.team1,
      team2: matchData?.team2,
      gender: matchData?.gender,
      sport_name: matchData?.sport_name,
      game_object: {
        first_innings_fancy_overs: selectOvers[0]?.first,
        second_innings_fancy_overs: selectOvers[0]?.second,
        match_type: matchData.macth_type,
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
            res?.data?.message ? res?.data?.message : `Something wen't wrong`
          );
        }
      })
      .catch((err) => {
        setIsProcessing(false);
        setError(err?.message ? err.message : `Something wen't wrong`);
        console.log(err);
      });
  };

  const handleMacthUpdate = async () => {
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
      !matchData.macth_type
    ) {
      return setError("Please enter required fields");
    }
    setIsProcessing(true);
    setError("");

    await call(UPDATE_MATCH, {
      register_id,
      account_role,
      match_id: matchId,
      series_name: matchData?.series_name,
      match_place: matchData?.match_place,
      stadium: matchData?.stadium,
      time: matchData?.time,
      date: matchData?.date,
      team1: matchData?.team1,
      team2: matchData?.team2,
      gender: matchData?.gender,
      sport_name: matchData?.sport_name,
      game_object: {
        first_innings_fancy_overs: selectOvers[0]?.first,
        second_innings_fancy_overs: selectOvers[0]?.second,
        match_type: matchData.macth_type,
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
    setMatchId(item.match_id);
    setIsMatchEditing(true);
  };

  const handleChange = (e) => {
    setMatchData({ ...matchData, [e.target.name]: e.target.value });
  };

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
        setStatus((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  // const getScheduleMatches = async () => {
  //   await call(GET_ALL_MATCHES, {
  //     register_id: "company",
  //     account_role: "company",
  //   })
  //     .then((res) => {
  //       let result = res?.data?.data;
  //       setLiveMatchesData(result?.liveMatches);
  //       setTodayMatchesData(result?.todaysMatches);
  //       setUpcomingMatchesData(result?.upCommingMatches);
  //     })
  //     .catch((err) => console.log(err));
  // };

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
      team: (
        <span className="role-color">
          {match?.team1} vs {match?.team2}
        </span>
      ),
      sportName: match?.sport_name,
      matchPlace: match?.match_place,
      dateTime: (
        <div>
          {match?.date} <br /> <span>{match?.time}</span>{" "}
        </div>
      ),
      editButton: (
        <GoPencil
          className="edit-icon cursor-pointer"
          onClick={() => handleUpadate(match)}
        />
      ),
    }));

  const scheduledColumns = [
    { header: "Series Name", field: "series_name" },
    { header: "Match Name", field: "match_name" },
  ];

  const scheduleTable = liveMatchesData?.map((item) => {
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

  useEffect(() => {
    getAllMatches();
   // getScheduleMatches();
  }, []);

  // useEffect(() => {
  //  // getScheduleMatches();
  // }, [status]);

  return (
    <div className="p-3">
      <h5 className="meetings-heading">All Admins / Sports Management</h5>
      <div className="row gutter-1rem">
        <div className="col-3">
          <div className="meetings-heading">Series Name</div>
          <div className="sport-management-input d-flex ">
            <input
              placeholder="Enter Series Name"
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
              >
                <option>Select</option>
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
                placeholder="Enter Team"
                name={item?.name}
                value={matchData[item?.name] || ""}
              ></input>
            </div>
          );
        })}
        <div className="col-3 meetings-heading">
          <div>Match Place</div>
          <div className="sport-management-input d-flex p-1">
            <input
              placeholder="Enter Match Place"
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
              placeholder="Enter Stadium"
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
              value={matchData?.gender || ""}
            >
              <option>
                {matchData?.gender ? matchData?.gender : "Select"}
              </option>
              <option value="M">Male</option>
              <option value="F">FeMale</option>
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
              onChange={(e) => handleChange(e)}
            >
              <option value="select">
                {matchData?.macth_type ? matchData?.macth_type : "Select"}
              </option>
              <option value="T10">T10</option>
              <option value="T20">T20</option>
              <option value="ODI">ODI</option>
              <option value="TEST">TEST</option>
            </select>
          </div>
        </div>
        {MatchTypeDropdown.map((item, index) => {
          return (
            <div className={item.cspan} key={index}>
              <div>{item.heading}</div>
              <input
                className="sport-management-input d-flex p-1 w-100 sport-management-select meetings-heading"
                name={item.name}
                defaultValue={item?.overs || ""}
                // disabled
                onChange={(e) => handleOversChange(e)}
              ></input>
            </div>
          );
        })}
        <div className="col-2"></div>
        <div className="col-3 d-flex align-items-end">
          <div
            className="sport-management-input w-100 d-flex justify-content-center align-items-center bg-yellow"
            onClick={
              IsMatchEditing === false
                ? () => handleMacthSubmit()
                : () => handleMacthUpdate()
            }
          >
            {isProcessing === true
              ? "Processing..."
              : IsMatchEditing === true
              ? "Update"
              : "Submit"}
          </div>
        </div>
        {error && <div className="danger text-center mt-1">{error}</div>}
      </div>
      <hr className="mt-3" />
      <div className="row gutter-1rem d-flex justify-content-around">
        <div className="col-8">
          <div className="sport-management-input meetings-heading p-2">
            <h5 className="mb-1">Your Created Matches</h5>
          </div>
          <div className="mt-2">
            <Table data={tableData || []} columns={columns} />
          </div>
        </div>
        <div className="col-4 meetings-heading">
          {/* <div className="sport-management-input p-2">
            <h5>Scheduled Matches</h5>
          </div> */}
          <div className="sport-management-input  d-flex">
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
            <Table data={scheduleDate || []} columns={scheduledColumns} />
          </div>
          <MatchSubmitPopup
            displayData={"You Are Successfully Created Your Match"}
            state={createMacthSubmit}
            setState={setCreateMacthSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default SportsManagement;
