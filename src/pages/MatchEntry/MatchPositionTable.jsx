import { Col, Row } from "antd";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

function MatchPositionTable(props) {
  const { cricketTeam } = props;
  const MATCH_POSITION_TABLE = [
    {
      name: "Ganesh",
      grossPL: 50000000.0,
      cPosition: 50000000.0,
      rfPosition: 50000000.0,
      ursPosition: 50000000.0,
    },
    {
      name: "Ganesh",
      grossPL: 50000000.0,
      cPosition: 50000000.0,
      rfPosition: 50000000.0,
      ursPosition: 50000000.0,
    },
    {
      name: "Ganesh",
      grossPL: 50000000.0,
      cPosition: 50000000.0,
      rfPosition: 50000000.0,
      ursPosition: 50000000.0,
    },
    {
      name: "Ganesh",
      grossPL: 50000000.0,
      cPosition: 50000000.0,
      rfPosition: 50000000.0,
      ursPosition: 50000000.0,
    },
    {
      name: "Ganesh",
      grossPL: 50000000.0,
      cPosition: 50000000.0,
      rfPosition: 50000000.0,
      ursPosition: 50000000.0,
    },
  ];

  return (
    <div className="common-container w-50">
      <div className="match-position-heading">
        <Row>
          <Col className="flex-start" span={14}>
            <div className="font-12 fw-600">
              Match Position- <span className="yellow-clr">{cricketTeam}</span>
            </div>
          </Col>
          <Col span={5}>
            <div className="w-70 flex-space-around font-12 fw-600 share-btn">
              <div>Share</div>
              <FaRegArrowAltCircleDown className="font-18 yellow-clr" />
            </div>
          </Col>
          <Col span={5}>
            <div className="w-70 flex-space-around font-12 fw-600 share-btn">
              <div>Comm</div>
              <FaRegArrowAltCircleDown className="font-18" />
            </div>
          </Col>
        </Row>
      </div>
      <div className="match-position-table mt-10">
        <Row>
          <Col span={4}>
            <div className="font-12 fw-600">CLIENT NAME</div>
          </Col>
          <Col span={5}>
            <div className="font-12 fw-600">GROSS P/L</div>
          </Col>
          <Col span={5}>
            <div className="font-12 fw-600">C POSITION</div>
          </Col>
          <Col span={5}>
            <div className="font-12 fw-600">RF POSITION</div>
          </Col>
          <Col span={5}>
            <div className="font-12 fw-600">URS POSITION</div>
          </Col>
        </Row>
      </div>
      <div className="match-position-content">
        {MATCH_POSITION_TABLE?.map((item, index) => (
          <div className="match-position-row" key={index}>
            <Row>
              <Col span={4}>
                <div className="font-12 fw-600">{item.name}</div>
              </Col>
              <Col span={5}>
                <div className="font-12 fw-600">{item.grossPL}</div>
              </Col>
              <Col span={5}>
                <div className="font-12 fw-600">{item.cPosition}</div>
              </Col>
              <Col span={5}>
                <div className="font-12 fw-600">{item.rfPosition}</div>
              </Col>
              <Col span={5}>
                <div className="font-12 fw-600">{item.ursPosition}</div>
              </Col>
            </Row>
          </div>
        ))}
      </div>
      <div className="match-position-table">
        <Row>
          <Col span={4}>
            <div className="font-12 fw-600">TOTAL</div>
          </Col>
          <Col span={5}>
            <div className="font-12 fw-600">50000000000</div>
          </Col>
          <Col span={5}>
            <div className="font-12 fw-600">50000000000</div>
          </Col>
          <Col span={5}>
            <div className="font-12 fw-600">50000000000</div>
          </Col>
          <Col span={5}>
            <div className="font-12 fw-600">50000000000</div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MatchPositionTable;
