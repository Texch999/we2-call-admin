import React, { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminPopReports from "../onepagereport/AdminPopReports";
import CustomPagination from "../pagination/CustomPagination";

const AdminSharesMatchStatement = () => {
  const [adminShareStatementMatchPopUp, setAdminShareStatementMatchPopUp] =
    useState(false);
  const [activeReport, setActiveReport] = useState("Share Statement");
  const [selectedOptions, setSelectedOptions] = useState({});
  const reports = ["Share Statement", "Statement", "Financial Statement"];
  const inputFields = [
    {
      label: "From",
      type: "date",
      name: "start_date",
      id: "startDate",
    },
    {
      label: "To",
      type: "date",
      name: "end_date",
      id: "endDate",
    },
    {
      label: "Series Name",
      options: ["Enter Series Name", "WTC", "ODI", "IPL"],
      name: "series_name",
      id: "seriesName",
    },
    {
      label: "Match Name",
      options: ["Select Match   ", "WTC", "ODI", "IPL"],
      name: "match_name",
      id: "matchName",
    },
    {
      label: "Fancy",
      options: ["Fancy", "1st Innings", "2nd Innings", "10th over"],
      name: "fancy",
      id: "fancy",
    },
    {
      label: "Name",
      options: ["Select", "Sri1234", "Jayantha", "srikanth"],
      name: "client_name",
      id: "clientName",
    },
  ];
  const adminSharesMatchStatementData = [
    {
      date_time: "19 July 2023, 10:00:00 PM",
      series_name: "T20 World Cup 2023",
      team_name: "India vs England",
      match_place: "Hyderabad",
      win_team: "India",
      profit_loss: 1000000.0,
    },
    {
      date_time: "19 July 2023, 10:00:00 PM",
      series_name: "T20 World Cup 2023",
      team_name: "India vs England",
      match_place: "Hyderabad",
      win_team: "India",
      profit_loss: 1000000.0,
    },
    {
      date_time: "19 July 2023, 10:00:00 PM",
      series_name: "T20 World Cup 2023",
      team_name: "India vs England",
      match_place: "Hyderabad",
      win_team: "India",
      profit_loss: 1000000.0,
    },
    {
      date_time: "19 July 2023, 10:00:00 PM",
      series_name: "T20 World Cup 2023",
      team_name: "India vs England",
      match_place: "Hyderabad",
      win_team: "India",
      profit_loss: 1000000.0,
    },
  ];
  const adminSharepopupHeadings = [
    { header: "Admins Name", field: "admin_name" },
    { header: "Role", field: "role" },
    { header: "Admin Net P/L", field: "profit_loss" },
    { header: "U/L Share", field: "ul_share" },
  ];
  const adminSharepopupData = [
    {
      admin_name: "Animesh",
      role: "Agent",
      profit_loss: 50000000,
      ul_share: 50000000,
    },
    {
      admin_name: "Animesh",
      role: "Master",
      profit_loss: 50000000,
      ul_share: 50000000,
    },
    {
      admin_name: "Animesh",
      role: "SM",
      profit_loss: 50000000,
      ul_share: 50000000,
    },
    {
      admin_name: "Animesh",
      role: "SA",
      profit_loss: 50000000,
      ul_share: 50000000,
    },
  ];

  const handleReport = (report) => {
    setActiveReport(report);
  };
  const handleSelect = (fieldName, value) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [fieldName]: value,
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(selectedOptions);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add your logic here to fetch data for the selected page.
  };

  return (
    <div className="p-4">
      <div>
        <h5 className="meetings-heading mb-3">Admin Shares Match Statement</h5>
        <div className="mb-3">
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
        <hr />
        <Form onSubmit={(e) => handleFormSubmit(e)}>
          <div className="d-flex flex-sm-row container-fluid">
            {inputFields?.map((inputData, index) => (
              <div key={index} className="d-flex me-1 row">
                <Form.Group className="d-flex flex-column admin-match-statement col">
                  <Form.Label htmlFor={inputData?.id} className="ms-1">
                    {inputData?.label}
                  </Form.Label>
                  {inputData?.options ? (
                    <Form.Select
                      id={inputData?.id}
                      size="lg"
                      value={selectedOptions[inputData?.name] || ""}
                      onChange={(e) =>
                        handleSelect(inputData?.name, e.target.value)
                      }
                    >
                      {inputData?.options?.map((option, index) => (
                        <option className="w-100" key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </Form.Select>
                  ) : (
                    <Form.Control
                      type={inputData?.type}
                      value={selectedOptions[inputData?.name] || ""}
                      id={inputData?.id}
                      onChange={(e) =>
                        handleSelect(inputData?.name, e.target.value)
                      }
                      size="lg"
                    />
                  )}
                </Form.Group>
              </div>
            ))}
            <div className="mt-4">
              <Button
                type="submit"
                className="active-report-button verify-button"
              >
                Verify
              </Button>
            </div>
          </div>
        </Form>
      </div>

      <hr />
      <div>
        <Table responsive="md" className="call-management-data">
          <thead>
            <tr>
              <th className="text-center">DATE & TIME</th>
              <th className="text-center">SERIES NAME</th>
              <th className="text-center">TEAM NAME</th>
              <th className="text-center">MATCH PLACE</th>
              <th className="text-center">WIN TEAM</th>
              <th className="text-center">SHARE P/L</th>
            </tr>
          </thead>
          <tbody>
            {adminSharesMatchStatementData?.map((data, index) => (
              <tr key={index}>
                <td className="text-center">{data?.date_time}</td>
                <td className="text-center">{data?.series_name}</td>
                <td className="text-center">{data?.team_name}</td>
                <td className="text-center">{data?.match_place}</td>
                <td className="text-center">{data?.win_team}</td>
                <td
                  className="text-center clr-green cursor-pointer"
                  onClick={() => setAdminShareStatementMatchPopUp(true)}
                >
                  {parseFloat(data?.profit_loss).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={5} className="text-center">
                TOTAL
              </th>

              <th className="text-center clr-green">
                {adminSharesMatchStatementData
                  .reduce(
                    (total, data) => total + parseFloat(data?.profit_loss),
                    0
                  )
                  .toFixed(2)}
              </th>
            </tr>
          </tfoot>
          {adminShareStatementMatchPopUp && (
            <AdminPopReports
              show={adminShareStatementMatchPopUp}
              onHide={() => setAdminShareStatementMatchPopUp(false)}
              data={adminSharepopupData}
              columns={adminSharepopupHeadings}
              heading={`Admin Share`}
              totalPosition="admin_name"
            />
          )}
        </Table>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="d-flex justify-content-start font-clr-white total-count-container  py-2 px-4 rounded">
          <span>
            Showing <b> {currentPage} </b> 0f <b> {totalPages} </b> Entries....
          </span>
        </div>
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

export default AdminSharesMatchStatement;
