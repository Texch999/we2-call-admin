import { Button, Col, Divider, Row, Table } from "antd";
import React, { useState } from "react";

function IndividualPLReport() {
  const [individualClientInfo, setIndividualClientData] = useState([]);
  const [individualClientHeadings, setIndividualClientColumns] = useState([]);
  const [showData, setShowData] = useState(false);
  const [clientName, setClientName] = useState("Animesh");
  const [activeButton, setActiveButton] = useState("Client");

  const clientColumns = [
    { title: "Client Name", dataIndex: "client_name", key: "client_name" },
    { title: "Total P/L", dataIndex: "profit_loss", key: "profit_loss" },
  ];
  const individualClientColumns = [
    { title: "Data", dataIndex: "date", key: "date" },
    { title: "Match Name", dataIndex: "match_name", key: "match_name" },
    { title: "Win Team", dataIndex: "win_team", key: "win_team" },
    { title: "Net P/L", dataIndex: "profit_loss", key: "profit_loss" },
  ];
  const clientData = [
    {
      key: "1",
      client_name: "Animesh",
      profit_loss: 10000,
    },
    {
      key: "2",
      client_name: "Ganesh",
      profit_loss: 100000,
    },
    {
      key: "3",
      client_name: "Lokesh",
      profit_loss: 100000,
    },
  ];
  const individualClientData = [
    {
      key: "1",
      date: "25-07-2023",
      match_name: "India vs Sri Lanka",
      win_team: "India",
      profit_loss: 50000000.0,
    },
    {
      key: "2",
      date: "25-07-2023",
      match_name: "India vs Sri Lanka",
      win_team: "India",
      profit_loss: 50000000.0,
    },
    {
      key: "3",
      date: "25-07-2023",
      match_name: "India vs Sri Lanka",
      win_team: "India",
      profit_loss: 50000000.0,
    },
  ];
  const referralColumns = [
    {
      title: "Referral Name",
      dataIndex: "referral_name",
      key: "referral_name",
    },
    { title: "Total P/L", dataIndex: "profit_loss", key: "profit_loss" },
  ];
  const referralData = [
    {
      key: "1",
      referral_name: "Animesh",
      profit_loss: 10000,
    },
    {
      key: "2",
      referral_name: "Ganesh",
      profit_loss: 100000,
    },
    {
      key: "3",
      referral_name: "Lokesh",
      profit_loss: 100000,
    },
  ];
  const [mainIndividualData, setMainIndividualData] = useState(clientData);
  const [mainIndividualColumns, setMainIndividualColumns] =
    useState(clientColumns);
  const handleClient = (record) => {
    if (record.client_name === record.client_name) {
      setShowData(true);
      setIndividualClientData(individualClientData);
      setIndividualClientColumns(individualClientColumns);
      setClientName(record.client_name);
    }
  };
  const handleIndividualReports = (individualReports) => {
    setActiveButton(individualReports);
    if (individualReports === "Client") {
      setMainIndividualData(clientData);
      setMainIndividualColumns(clientColumns);
    } else if (individualReports === "Referal") {
      setMainIndividualData(referralData);
      setMainIndividualColumns(referralColumns);
    }
  };
  return (
    <div className="main-individual-report-container">
      <hr className="hr-line-opacity" />
      <Row gutter={[16, 16]}>
        <Col
          sm={6}
          md={4}
          lg={3}
          onClick={() => handleIndividualReports("Client")}
        >
          <Button
            block
            className={`individual-report-button ${
              activeButton === "Client" ? "active-button" : "deactive-button"
            }`}
          >
            Client
          </Button>
        </Col>
        <Col
          sm={6}
          md={4}
          lg={3}
          onClick={() => handleIndividualReports("Referal")}
        >
          <Button
            block
            className={`individual-report-button ${
              activeButton === "Referal" ? "active-button" : "deactive-button"
            }`}
          >
            Referal
          </Button>
        </Col>
        <Col
          sm={6}
          md={6}
          lg={4}
          onClick={() => handleIndividualReports("UL Share P/L")}
        >
          <Button
            block
            className={`individual-report-button ${
              activeButton === "UL Share P/L"
                ? "active-button"
                : "deactive-button"
            }`}
          >
            UL Share P/L
          </Button>
        </Col>
        <Col
          sm={6}
          md={6}
          lg={4}
          onClick={() => handleIndividualReports("Platform Comm P/L")}
        >
          <Button
            block
            className={`individual-report-button ${
              activeButton === "Platform Comm P/L"
                ? "active-button"
                : "deactive-button"
            }`}
          >
            Platform Comm P/L
          </Button>
        </Col>
      </Row>
      <div>
        <h3>Client :</h3>
      </div>
      <Row gutter={[16, 16]}>
        <Col md={6}>
          <Table
            className="offline-reports-table"
            dataSource={mainIndividualData}
            columns={mainIndividualColumns}
            pagination={false}
            onRow={(record) => ({
              onClick: () => handleClient(record),
            })}
          />
        </Col>
        {showData && (
          <Col md={18}>
            <Button
              size="large"
              className="w-100 deactive-button custom-client-button"
            >{`${clientName}-10000`}</Button>
            {/* <Divider /> */}

            <Table
              className="offline-reports-table"
              dataSource={individualClientInfo}
              columns={individualClientHeadings}
              pagination={false}
            />
          </Col>
        )}
      </Row>
    </div>
  );
}

export default IndividualPLReport;
