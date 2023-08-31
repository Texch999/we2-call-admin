import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router";
import { GiClick } from "react-icons/gi";
import "./style.css";

const ShareRiskLiveMatches = () => {
  const navigate = useNavigate();
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
              {shareRiskLiveMatchHeadings.map((headings, index) => (
                <th className="text-center" key={index}>
                  {headings}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shareRiskLiveMatchData?.map((data, index) => (
              <tr key={index}>
                <td className="text-center">{data?.date_time}</td>
                <td className="text-center">{data?.series_name}</td>
                <td
                  className="text-center clr-yellow cursor-pointer"
                  onClick={() =>
                    navigate(
                      `/match-share-risk/${encodeURIComponent(data?.team_name)}`
                    )
                  }
                >
                  {data?.team_name}{" "}
                  <GiClick className="custom-click-icon ms-1 mt-2" />
                </td>
                <td className="text-center">{data?.match_place}</td>

                <td className="text-center ">{data?.team_one}</td>

                <td className="clr-green">
                  {parseFloat(data?.amount).toFixed(2)}
                </td>
                <td className="text-center">{data?.team_two}</td>
                <td className="clr-red">
                  {parseFloat(data?.profit).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ShareRiskLiveMatches;
