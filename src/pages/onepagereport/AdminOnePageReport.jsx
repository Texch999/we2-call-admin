import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminOnePageReport = () => {
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
  const handleReport = (report) => {
    setActiveReport(report);
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
                <td className="text-center">{data?.admin_name}</td>
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
        </Table>
      </div>
    </div>
  );
};

export default AdminOnePageReport;
