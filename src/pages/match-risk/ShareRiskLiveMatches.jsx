import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminsTable from "../";
import { MdOutlineArrowForward } from "react-icons/md";
import { useNavigate } from "react-router";

const ShareRiskLiveMatches = () => {
  const navigate = useNavigate();
  const shareRiskLiveMatchData = [
    {
      date_time: "19 July 2023, 10:00:00 PM",
      series_name: "Men T20 World Cup 2023 Ahmadabad Stadium",
      team_name: "India vs Srilanka",
      match_place: "Amhadabad Stadium",
      team_one: "NewZealnd",
      amount: 50000000,
      team_two: "Srilanka",
      profit: 5000000,
    },
  ];

  const shareRiskLiveMatchHeadings = [
    { header: "DATE & TIME", field: "date_time" },
    { header: "SERIES NAME", field: "series_name" },
    { header: "TEAM NAME", field: "team_name" },
    { header: "MATCH PLACE", field: "match_place" },
    { header: "", field: "team_one" },
    { header: "", field: "amount" },
    { header: "", field: "team_tow" },
    { header: "", field: "profit" },
  ];
  return (
    <div className="p-4">
      <h5 className="meetings-heading mb-3">Share Risk Live Matches </h5>
      <div>
        <Button className="all-match-button w-25 text-start">
          Live Matches
        </Button>
      </div>
      <hr />
      <div>
        {/* <Table responsive="md" className="call-management-data">
          <thead>
            <tr>
              {matchShareRiskHeadings.map((headings, index) => (
                <th className="text-center" key={index}>
                  {headings}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {matchShareRiskData?.map((data, index) => (
              <tr key={index}>
                <td className="text-center">{data?.date_time}</td>
                <td className="text-center">{data?.series_name}</td>
                <td className="text-center clr-yellow">{data?.team_name}</td>
                <td className="text-center">{data?.name}</td>
                <td className="text-center">{data?.role}</td>
                <td className="text-center clr-green">
                  {parseFloat(data?.team_two).toFixed(2)}
                </td>
                <td className="text-center">{data?.dropdown}</td>
                <td className="text-center clr-red">
                  {parseFloat(data?.team_two).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr></tr>
          </tfoot>
        </Table> */}
        <AdminsTable
          data={shareRiskLiveMatchData}
          columns={shareRiskLiveMatchHeadings}
        />
      </div>
    </div>
  );
};

export default ShareRiskLiveMatches;
