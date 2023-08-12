import { Button, Col, Row, Table } from "antd";
import React from "react";

function IndividualPLReport() {
  const individualClientColumns = [
    { title: "Client Name", dataIndex: "client_name", key: "client_name" },
    { title: "Total P/L", dataIndex: "profit_loss", key: "profit_loss" },
  ];
  const individualClientHeadings = [
    { title: "Client Name", dataIndex: "client_name", key: "client_name" },
    { title: "Total P/L", dataIndex: "profit_loss", key: "profit_loss" },
  ];
  const individualClientData = [
    {
      key: "1",
      client_name: "Animesh",
      profit_loss: 10000,
    },
    {
      key: "2",
      client_name: "Animesh",
      profit_loss: 100000,
    },
  ];
  const individualClientInfo = [
    {
      key: "1",
      client_name: "Animesh",
      profit_loss: 10000,
    },
    {
      key: "2",
      client_name: "Animesh",
      profit_loss: 100000,
    },
  ];
  return (
    <div>
      <hr className="hr-line-opacity" />
      <Row gutter={[16, 16]}>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Button block className="details-btn">Client</Button>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Button block className="details-btn">Referal</Button>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <Button block className="details-btn">UL Share P/L</Button>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <Button block className="details-btn">Platform Comm P/L</Button>
        </Col>
      </Row>
      <div>
        <h3>Client :</h3>
      </div>
      <Row>
        <Col md={6}>
          <Table
            dataSource={individualClientData}
            columns={individualClientColumns}
            pagination={false}
          />
        </Col>
        <Col md={18}>
          <Table
            dataSource={individualClientInfo}
            columns={individualClientHeadings}
          />
        </Col>
      </Row>
    </div>
  );
}

export default IndividualPLReport;
