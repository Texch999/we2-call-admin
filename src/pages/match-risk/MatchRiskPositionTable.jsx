import React from "react";
import AdminsTable from "../onepagereport/AdminsTable";
import { Container, Row, Col } from "react-bootstrap";

const MatchRiskPositionTable = () => {
  const FANCY_CLIENT_HEADER_DATA = [
    { header: "CLIENT NAME", field: "client_name" },
    { header: "GROSS PL", field: "grossPL" },
    { header: "C NET", field: "cNet" },
    { header: "RF NET", field: "rfNet" },
    { header: "NET P/L", field: "netPL" },
  ];
  const FANCY_CLIENT_TABLE_DATA = [
    {
      client_name: "Animesh",
      grossPL: 50000000,
      cNet: 50000000,
      rfNet: 50000000,
      netPL: 50000000,
    },
    {
      client_name: "Animesh",
      grossPL: 50000000,
      cNet: 50000000,
      rfNet: 50000000,
      netPL: 50000000,
    },
    {
      client_name: "Animesh",
      grossPL: 50000000,
      cNet: -50000000,
      rfNet: -50000000,
      netPL: 50000000,
    },
    {
      client_name: "Animesh",
      grossPL: 50000000,
      cNet: 50000000,
      rfNet: 50000000,
      netPL: 50000000,
    },
    {
      client_name: "Animesh",
      grossPL: 50000000,
      cNet: 50000000,
      rfNet: 50000000,
      netPL: 50000000,
    },
  ];
  return (
    <Container>
      <Row>
        <Col>
          <AdminsTable
            data={FANCY_CLIENT_TABLE_DATA}
            columns={FANCY_CLIENT_HEADER_DATA}
            totalPosition="client_name"
          />
        </Col>
        <Col>
          <AdminsTable
            data={FANCY_CLIENT_TABLE_DATA}
            columns={FANCY_CLIENT_HEADER_DATA}
            totalPosition="client_name"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MatchRiskPositionTable;
