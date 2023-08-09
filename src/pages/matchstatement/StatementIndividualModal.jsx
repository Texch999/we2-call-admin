import { Modal, Col, Row } from "antd";
import React, { useState } from "react";
import { BiUpArrowCircle, BiDownArrowCircle } from "react-icons/bi";
import ClientTableData from "./ClientTableData";
function StatementIndividualModal(props) {
  const { openStatementIndividualPopup, setOpenStatementIndividualPopup } =
    props;
  const handleStatementIndividualClose = () => {
    setOpenStatementIndividualPopup(false);
  };
  const [showClientData, setShowClientData] = useState(false);
  const handleShowClientData = () => {
    setShowClientData((prev) => !prev);
  };
  const SETTELMENT_DETAILS = [
    {
      name: "Animesh",
      matchpl: "1000000.00",
      sixover: "500000.00",
      tenover: "500000.00",
      fifteenover: "500000.00",
      sixoverone: "500000.00",
      tenoverone: "500000.00",
      fifteenoverone: "500000.00",
      fancycom: "500000.00",
      mfc: "500000.00",
    },
    {
      name: "Animesh",
      matchpl: "1000000.00",
      sixover: "500000.00",
      tenover: "500000.00",
      fifteenover: "500000.00",
      sixoverone: "500000.00",
      tenoverone: "500000.00",
      fifteenoverone: "500000.00",
      fancycom: "500000.00",
      mfc: "500000.00",
    },
    {
      name: "Animesh",
      matchpl: "1000000.00",
      sixover: "500000.00",
      tenover: "500000.00",
      fifteenover: "500000.00",
      sixoverone: "500000.00",
      tenoverone: "500000.00",
      fifteenoverone: "500000.00",
      fancycom: "500000.00",
      mfc: "500000.00",
    },
    {
      name: "Animesh",
      matchpl: "1000000.00",
      sixover: "500000.00",
      tenover: "500000.00",
      fifteenover: "500000.00",
      sixoverone: "500000.00",
      tenoverone: "500000.00",
      fifteenoverone: "500000.00",
      fancycom: "500000.00",
      mfc: "500000.00",
    },
    {
      name: "Animesh",
      matchpl: "1000000.00",
      sixover: "500000.00",
      tenover: "500000.00",
      fifteenover: "500000.00",
      sixoverone: "500000.00",
      tenoverone: "500000.00",
      fifteenoverone: "500000.00",
      fancycom: "500000.00",
      mfc: "500000.00",
    },
    {
      name: "Animesh",
      matchpl: "1000000.00",
      sixover: "500000.00",
      tenover: "500000.00",
      fifteenover: "500000.00",
      sixoverone: "500000.00",
      tenoverone: "500000.00",
      fifteenoverone: "500000.00",
      fancycom: "500000.00",
      mfc: "500000.00",
    },
    {
      name: "Animesh",
      matchpl: "1000000.00",
      sixover: "500000.00",
      tenover: "500000.00",
      fifteenover: "500000.00",
      sixoverone: "500000.00",
      tenoverone: "500000.00",
      fifteenoverone: "500000.00",
      fancycom: "500000.00",
      mfc: "500000.00",
    },
    {
      name: "Animesh",
      matchpl: "1000000.00",
      sixover: "500000.00",
      tenover: "500000.00",
      fifteenover: "500000.00",
      sixoverone: "500000.00",
      tenoverone: "500000.00",
      fifteenoverone: "500000.00",
      fancycom: "500000.00",
      mfc: "500000.00",
    },
    {
      name: "Animesh",
      matchpl: "1000000.00",
      sixover: "500000.00",
      tenover: "500000.00",
      fifteenover: "500000.00",
      sixoverone: "500000.00",
      tenoverone: "500000.00",
      fifteenoverone: "500000.00",
      fancycom: "500000.00",
      mfc: "500000.00",
    },
    {
      name: "Animesh",
      matchpl: "1000000.00",
      sixover: "500000.00",
      tenover: "500000.00",
      fifteenover: "500000.00",
      sixoverone: "500000.00",
      tenoverone: "500000.00",
      fifteenoverone: "500000.00",
      fancycom: "500000.00",
      mfc: "500000.00",
    },
  ];
  return (
    <Modal
      open={openStatementIndividualPopup}
      onCancel={() => handleStatementIndividualClose()}
      className="login-modal w-100"
      centered
      footer={null}
    >
      <div>
        <div className="flex-row flex-space-around p-10">
          <div className="flex-row flex-start w-50">
            <div className="details-btn h-20p font-10 w-25 flex-center br-10 ml-5 mr-5 clr-yellow">
              Match : IND vs SL
            </div>
            <div className="details-btn h-20p font-10 w-25 flex-center br-10 ml-5 mr-5 clr-yellow">
              Date : 31/07/2023
            </div>
          </div>
          <div className="d-flex flex-row flex-flex-end w-50">
            <div className="details-btn h-20p font-10 w-30 br-40 clr-yellow flex-space-between p-10 flex-row ml-5 mr-5">
              {" "}
              <div className="font-14 clr-yellow">Client P/L</div>
              <BiDownArrowCircle
                style={{ fontSize: "25px", color: "yellow" }}
              />
            </div>
            <div className="details-btn h-20p font-10 w-20 br-40 clr-yellow flex-space-between p-10 flex-row ml-5 mr-5">
              {" "}
              <div className="font-14 clr-yellow">RF P/L</div>
              <BiDownArrowCircle
                style={{ fontSize: "25px", color: "yellow" }}
              />
            </div>
          </div>
        </div>
        <div className="table-border p-0 mt-10">
          <div className="upcoming-meetings-heading">
            <Row>
              <Col span={3}>
                <div className="font-12 fw-600">Name</div>
              </Col>
              <Col span={3}>
                <div className="font-12 fw-600">Match P/L</div>
              </Col>{" "}
              <Col span={2}>
                <div className="font-12 fw-600">6 Over</div>
              </Col>
              <Col span={2}>
                <div className="font-12 fw-600">10 Over</div>
              </Col>
              <Col span={2}>
                <div className="font-12 fw-600">15 over</div>
              </Col>
              <Col span={2}>
                <div className="font-12 fw-600">6 Over</div>
              </Col>
              <Col span={2}>
                <div className="font-12 fw-600">10 Over</div>
              </Col>
              <Col span={2}>
                <div className="font-12 fw-600">15 over</div>
              </Col>
              <Col span={3}>
                <div className="font-12 fw-600">Fancy R - Comm</div>
              </Col>
              <Col span={3}>
                <div className="font-12 fw-600">M+F+C</div>
              </Col>
            </Row>
          </div>
          <div className="meeting-content h-25vh">
            {SETTELMENT_DETAILS?.map((item, index) => (
              <div className="upcoming-meetings-content" key={index}>
                <Row>
                  <Col span={3}>
                    <div
                      className="font-12 fw-600"
                      onClick={() => handleShowClientData()}
                    >
                      {item.name}
                    </div>
                  </Col>
                  <Col span={3}>
                    <div className="font-12 fw-600 clr-green">
                      {item.matchpl}
                    </div>
                  </Col>
                  <Col span={2}>
                    <div className="font-12 fw-600 clr-green">
                      {item.sixover}
                    </div>
                  </Col>
                  <Col span={2}>
                    <div className="font-12 fw-600 clr-green">
                      {item.tenover}
                    </div>
                  </Col>
                  <Col span={2}>
                    <div className="font-12 fw-600 clr-green">
                      {item.fifteenover}
                    </div>
                  </Col>
                  <Col span={2}>
                    <div className="font-12 fw-600 clr-green">
                      {item.sixoverone}
                    </div>
                  </Col>
                  <Col span={2}>
                    <div className="font-12 fw-600 clr-green">
                      {item.tenover}
                    </div>
                  </Col>
                  <Col span={2}>
                    <div className="font-12 fw-600 clr-green">
                      {item.fifteenoverone}
                    </div>
                  </Col>
                  <Col span={3}>
                    <div className="font-12 fw-600 clr-green">
                      {item.fancycom}
                    </div>
                  </Col>
                  <Col span={3}>
                    <div className="font-12 fw-600 clr-green">
                      {item.matchpl}
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
          <div className="upcoming-meetings-heading">
            <Row>
              <Col span={3}>
                <div className="font-12 fw-600 flex-center">TOTAL</div>
              </Col>
              <Col span={3}>
                <div className="font-12 fw-600 clr-green">1000000.00</div>
              </Col>
              <Col span={2}>
                <div className="font-12 fw-600 clr-green">1000000.00</div>
              </Col>
              <Col span={2}>
                <div className="font-12 fw-600 clr-green">1000000.00</div>
              </Col>
              <Col span={2}>
                <div className="font-12 fw-600 clr-green">1000000.00</div>
              </Col>{" "}
              <Col span={2}>
                <div className="font-12 fw-600 clr-green">1000000.00</div>
              </Col>
              <Col span={2}>
                <div className="font-12 fw-600 clr-green">1000000.00</div>
              </Col>{" "}
              <Col span={2}>
                <div className="font-12 fw-600 clr-green">1000000.00</div>
              </Col>
              <Col span={3}>
                <div className="font-12 fw-600 clr-green">1000000.00</div>
              </Col>{" "}
              <Col span={3}>
                <div className="font-12 fw-600 clr-green">1000000.00</div>
              </Col>
            </Row>
          </div>
          {showClientData && <ClientTableData />}
        </div>
      </div>
    </Modal>
  );
}

export default StatementIndividualModal;
