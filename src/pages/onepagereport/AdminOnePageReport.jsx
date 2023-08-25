import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminOnePageReportPopup from "./AdminOnePageReportPopup";

const AdminOnePageReport = () => {
  const [adminOnePageReportPopUp, setAdminOnePageReportPopUp] = useState(false);
  const [adminName, setAdminName] = useState("");
  const [role, setRole] = useState("");
  const reports = [
    "Client One Page Report",
    "Admin One Page Report",
    "UL/Platform Comm Report",
  ];
  const [activeReport, setActiveReport] = useState("Admin One Page Report");
  const adminOnePageReportData = [
    {
      admin_name: "Animesh",
      admin_role: "Agent",
      profit_loss: 500000.0,
      ul_share: 200000.0,
    },
    {
      admin_name: "Sri8647",
      admin_role: "Master",
      profit_loss: 500000.0,
      ul_share: 200000.0,
    },
    {
      admin_name: "Ganesh",
      admin_role: "Super Master",
      profit_loss: 500000.0,
      ul_share: 200000.0,
    },
    {
      admin_name: "Lokesh",
      admin_role: "Super Admin",
      profit_loss: 500000.0,
      ul_share: 200000.0,
    },
    {
      admin_name: "Lokesh",
      admin_role: "Super Admin",
      profit_loss: 500000.0,
      ul_share: 200000.0,
    },
    {
      admin_name: "Dona456",
      admin_role: "Super Master",
      profit_loss: 500000.0,
      ul_share: 200000.0,
    },
  ];
  const adminOnePageReportIndividualData = [
    {
      series_name: "T20 world cup",
      date_time: "02/08/2023 11:32:00 AM",
      team: "india",
      win_team: "india",
      profit_loss: 50000000,
      urs_profilt_loss: 50000000,
    },
    {
      series_name: "T20 world cup",
      date_time: "02/08/2023 11:32:00 AM",
      team: "india",
      win_team: "india",
      profit_loss: 50000000,
      urs_profilt_loss: 50000000,
    },
  ];
  const adminOnePageReportIndividualHeadings = [
    { header: "Series Name", field: "series_name" },
    { header: "Date & Time", field: "date_time" },
    { header: "Team", field: "team" },

    { header: "Win Team", field: "win_team" },
    { header: "Admin P/L", field: "profit_loss" },
    { header: "Urs P/L", field: "urs_profilt_loss" },
  ];
  const handleReport = (report) => {
    setActiveReport(report);
  };
  const handleAdminReports = (data) => {
    setAdminName(data?.admin_name);
    setRole(data?.admin_role);
    setAdminOnePageReportPopUp(true);
  };
  return (
    <div className="p-4">
      <h5 className="meetings-heading mb-3">One Page Report</h5>
      <div className="d-flex align-items-center justify-content-between">
        <div>
          {reports.map((report, index) => (
            <Button
              key={index}
              className={`me-2 admin-reports-button ${
                report === activeReport ? "active-report-button" : ""
              }`}
              onClick={() => handleReport(report)}
            >
              {report}
            </Button>
          ))}
        </div>
        <Button className="all-match-button">All Match</Button>
      </div>
      <hr />

      <div>
        <Table responsive="md" className="call-management-data">
          <thead>
            <tr>
              <th className="text-center">ADMINS NAME</th>
              <th className="text-center">ADMINS ROLE</th>
              <th className="text-center">ADMINS NET P/L</th>
              <th className="text-center">
                {activeReport === "UL/Platform Comm Report"
                  ? "UL /PLATFORM COMM"
                  : "UL SHARE"}
              </th>
            </tr>
          </thead>
          <tbody>
            {adminOnePageReportData?.map((data, index) => (
              <tr key={index}>
                <td
                  className="text-center cursor-pointer"
                  onClick={() => handleAdminReports(data)}
                >
                  {data?.admin_name}
                </td>
                <td className="text-center">{data?.admin_role}</td>
                <td className="text-center">
                  {parseFloat(data?.profit_loss).toFixed(2)}
                </td>
                <td className="text-center">
                  {parseFloat(data?.ul_share).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={2}>TOTAL</th>
              <th className="text-center clr-green">
                {adminOnePageReportData
                  ?.reduce(
                    (total, data) => total + parseFloat(data?.profit_loss),
                    0
                  )
                  .toFixed(2)}
              </th>
              <th className="text-center clr-green">
                {adminOnePageReportData
                  ?.reduce(
                    (total, data) => total + parseFloat(data?.ul_share),
                    0
                  )
                  .toFixed(2)}
              </th>
            </tr>
          </tfoot>
          {adminOnePageReportPopUp && (
            <AdminOnePageReportPopup
              show={adminOnePageReportPopUp}
              onHide={() => setAdminOnePageReportPopUp(false)}
              data={adminOnePageReportIndividualData}
              columns={adminOnePageReportIndividualHeadings}
              adminName={adminName}
              role={role}
            />
          )}
        </Table>
      </div>
    </div>
  );
};

export default AdminOnePageReport;
