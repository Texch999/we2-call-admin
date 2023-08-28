import React from "react";
import { Button,Container,Row,Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import MatchRiskPositionTable from "./MatchRiskPositionTable";

const FancyShareRisk = () => {
  return (
    <div className="p-4">
      <h5 className="meetings-heading mb-3">Match Share Risk </h5>
      <hr />
      <div>
        <Button className="all-match-button share-risk-match-button clr-yellow w-100 text-start">
          Share Risk - Live Match
        </Button>
      </div>
      <Container fluid className="match-share-risk-position-table-container mt-3">
        <Row>
          <Col>
            <MatchRiskPositionTable teamName="IND" />
          </Col>
          <Col>
            <MatchRiskPositionTable teamName="SL" />
          </Col>
        </Row>
      </Container>
      {/* <div>
        <Table responsive="md" className="call-management-data">
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
                  {parseFloat(data?.team_one).toFixed(2)}
                </td>
                <td className="text-center">{data?.dropdown}</td>
                <td className="text-center clr-red">
                  {parseFloat(data?.team_two).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div> */}
    </div>
  );
};

export default FancyShareRisk;
