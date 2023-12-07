import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { GiClick } from "react-icons/gi";
import "./style.css";
import CustomPagination from "../pagination/CustomPagination";
import { useEffect, useState } from "react";
import { call } from "../../config/axios";
import { GET_LIVE_MATCH_RISK_POSITION } from "../../config/endpoints";
import moment from "moment";

const ShareRiskLiveMatches = () => {
  const register_id = localStorage?.getItem("register_id");
  const [liveMatches, setLiveMatches] = useState([]);

  const shareRiskLiveMatchData = [
    {
      date_time: "19 July 2023, 10:00:00 PM",
      series_name: "Men T20 World Cup 2023",
      team_name: "Newziland vs Srilanka",
      match_place: "Amhadabad Stadium",
      team_one: "NewZealnd",
      amount: 50000000,
      team_two: "Srilanka",
      profit: 5000000,
    },
    {
      date_time: "19 July 2023, 10:00:00 PM",
      series_name: "Women T20 World Cup 2023",
      team_name: "India vs Srilanka",
      match_place: "Amhadabad Stadium",
      team_one: "India Wo",
      amount: 50000000,
      team_two: "Srilanka Wo",
      profit: 5000000,
    },
    {
      date_time: "19 July 2023, 10:00:00 PM",
      series_name: "Men T20 World Cup 2023",
      team_name: "India vs Srilanka",
      match_place: "Amhadabad Stadium",
      team_one: "NewZealnd",
      amount: 50000000,
      team_two: "Srilanka",
      profit: 5000000,
    },
    {
      date_time: "19 July 2023, 10:00:00 PM",
      series_name: "Men T20 World Cup 2023",
      team_name: "Newziland vs Srilanka",
      match_place: "Amhadabad Stadium",
      team_one: "NewZealnd",
      amount: 50000000,
      team_two: "Srilanka",
      profit: 5000000,
    },
    {
      date_time: "19 July 2023, 10:00:00 PM",
      series_name: "Men T20 World Cup 2023 ",
      team_name: "India vs Srilanka",
      match_place: "Amhadabad Stadium",
      team_one: "NewZealnd",
      amount: 50000000,
      team_two: "Srilanka",
      profit: 5000000,
    },
    {
      date_time: "19 July 2023, 10:00:00 PM",
      series_name: "Men T20 World Cup 2023",
      team_name: "Newziland vs Srilanka",
      match_place: "Amhadabad Stadium",
      team_one: "NewZealnd",
      amount: 50000000,
      team_two: "Srilanka",
      profit: 5000000,
    },
  ];

  const shareRiskLiveMatchHeadings = [
    "DATE & TIME",
    "SERIES NAME",
    "TEAM NAME",
    "MATCH PLACE",
    "",
    "",
    "",
    "",
  ];
  const getUlShare = (netPl, ulShare) => {
    const netAmount = (+netPl * +ulShare) / 100;
    return netAmount;
  };

  const totalWin =
    liveMatches &&
    liveMatches?.length > 0 &&
    liveMatches?.reduce(
      (acc, obj) =>
        acc +
        (getUlShare(
          obj?.matchRiskObject?.winCalculation?.profiltLoss,
          obj?.ul_share
        ) || 0),
      0
    );
  const totalLoss =
    liveMatches &&
    liveMatches?.length > 0 &&
    liveMatches?.reduce(
      (acc, obj) =>
        acc +
        (getUlShare(
          obj?.matchRiskObject?.winCalculation?.profiltLoss,
          obj?.ul_share
        ) || 0),
      0
    );
  console.log({ totalLoss, totalWin });
  const matchDetails =
    liveMatches &&
    liveMatches?.length > 0 &&
    liveMatches?.map((match) => {
      return {
        match: `${match?.team1} vs ${match?.team2}`,
        matchMode: match?.series_name,
        venue: match?.stadium,
        date: moment(match?.matchTimeStamp).format("DD-MM-YYYY"),
        time: moment(match?.matchTimeStamp).format("hh:mm A"),
        user: (
          <div className="flex-start flex-column">
            <div>{match?.user_name}</div>
          </div>
        ),
        role: match?.account_role,
        team1: match?.team1,
        team2: match?.team2,
        teama: (
          <div
            className={`font-size-12 w-20 flex-center ${
              getUlShare(
                match?.matchRiskObject?.winCalculation?.profiltLoss,
                match?.ul_share
              ) >= 0
                ? "clr-green"
                : "clr-red"
            }`}
          >
            {getUlShare(
              match?.matchRiskObject?.winCalculation?.profiltLoss,
              match?.ul_share
            )}
          </div>
        ),
        teamb: (
          <div
            className={`font-size-12 w-20 flex-center ${
              getUlShare(
                match?.matchRiskObject?.loseCalcultion?.profiltLoss,
                match?.ul_share
              ) >= 0
                ? "clr-green"
                : "clr-red"
            }`}
          >
            {getUlShare(
              match?.matchRiskObject?.loseCalcultion?.profiltLoss,
              match?.ul_share
            )}
          </div>
        ),
      };
    });
  const getLiveMatches = async () => {
    await call(GET_LIVE_MATCH_RISK_POSITION, {
      register_id,
    })
      .then(async (res) => {
        const results = res?.data?.data.filter(
          (i) => i?.match_declared !== "Y"
        );
        setLiveMatches(results);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getLiveMatches();
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = matchDetails?.length ? matchDetails?.length / 5 : 0;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add your logic here to fetch data for the selected page.
  };
  return (
    <div className="p-4">
      <h5 className="meetings-heading mb-3">Share Risk Live Matches </h5>
      <hr />
      <div className="mb-2">
        <Button className="all-match-button share-risk-match-button w-25 text-start">
          Live Matches
        </Button>
      </div>

      <div>
        <Table responsive="md" className="call-management-data">
          <thead>
            <tr>
              {shareRiskLiveMatchHeadings?.map((headings, index) => (
                <th className="text-center" key={index}>
                  {headings}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matchDetails?.length &&
              matchDetails?.map((data, index) => (
                <tr key={index}>
                  <td className="text-center">
                    {data?.date}
                    {data?.time}
                  </td>
                  <td className="text-center">{data?.matchMode}</td>
                  <td className="text-center clr-yellow cursor-pointer">
                    {data?.match}{" "}
                    <GiClick className="custom-click-icon ms-1 mt-2" />
                  </td>
                  <td className="text-center">{data?.venue}</td>

                  <td className="text-center ">{data?.team1}</td>

                  <td className="clr-green">{data?.teama}</td>
                  <td className="text-center">{data?.team2}</td>
                  <td className="clr-red">{data?.teamb}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-4">
        {totalPages > 1 && (
          <div className="d-flex justify-content-start font-clr-white total-count-container  py-2 px-4 rounded">
            <span>
              Showing <b> {currentPage} </b> 0f <b> {totalPages} </b>{" "}
              Entries....
            </span>
          </div>
        )}
        <div className="d-flex justify-content-end mt-2">
          <CustomPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ShareRiskLiveMatches;
