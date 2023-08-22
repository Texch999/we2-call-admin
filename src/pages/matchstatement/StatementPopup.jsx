import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { PiArrowCircleDownBold, PiArrowCircleRightBold } from "react-icons/pi";
import ClientPLTable from "./ClientPLTable";
import RfplTable from "./RfplTable";

function StatementPopup(props) {
  const { showModal, setShowModal } = props;
  const handleClose = () => setShowModal(false);
  const [clientInputs, setClientInputs] = useState(true);
  const [rfplInputs, setRfplInputs] = useState(false);
  const handleRfplResult = () => {
    setClientInputs(false);
    setRfplInputs(true);
  };

  const handleClientEntry = () => {
    setClientInputs(true);
    setRfplInputs(false);
  };
  //   const navigate = useNavigate();
  //   const [matchEntryInputs, setMatchEntryInputs] = useState(true);
  //   const [matchResultInputs, setMatchResultInputs] = useState(false);
  //   const handleMatchEntry = () => {
  //     setMatchEntryInputs(true);
  //     setMatchResultInputs(false);
  //   };
  //   const handleMatchResult = () => {
  //     setMatchEntryInputs(false);
  //     setMatchResultInputs(true);
  //   };
  const CLIENTPL_DETAILS = [
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
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="lg"
        show={showModal}
        onHide={handleClose}
        centered
        className="match-share-modal w-100"
      >
        <Modal.Header>
          <div className="w-100">
            <div className="p-3 rounded-top match-position-bg w-100 d-flex align-items-center justify-content-between">
              <div className="w-25 d-flex justify-content-between">
                <div>
                  <div className="medium-font">Match Entry</div>
                  <PiArrowCircleDownBold className="d-flex" />
                </div>
                <div onClick={() => handleRfplResult()}>
                  <div className="medium-font">Match Result</div>
                  <PiArrowCircleDownBold className="d-flex" />
                </div>
              </div>
              <div className="w-50 d-flex justify-content-between">
                <div className="w-50 d-flex justify-content-end">
                  <div className="w-50 match-entry-btn d-flex align-items-center justify-content-around rounded-pill p-1">
                    <div className="medium-font">Client P/L</div>
                    <PiArrowCircleRightBold className="d-flex" />
                  </div>
                </div>
                <div className="w-50 d-flex justify-content-start">
                  <div className="w-50 match-entry-btn d-flex align-items-center justify-content-around rounded-pill p-1">
                    <div className="medium-font">Rf P/L</div>
                    <PiArrowCircleRightBold className="d-flex" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body className="p-3">
          <table className="w-100 match-position-table small-font">
            <thead>
              <tr className="text-center">
                <th>Name</th>
                <th>Match P/L</th>
                <th>6 Over</th>
                <th>10 Over</th>
                <th>15 Over</th>
                <th>6 Over</th>
                <th>10 Over</th>
                <th>15 Over</th>
                <th>FancyR-Com</th>
                <th>M+F+C</th>
              </tr>
            </thead>
            {CLIENTPL_DETAILS.map((item, index) => (
              <tbody key={index}>
                <tr className="text-center">
                  <td>{item.name}</td>
                  <td>{item.matchpl}</td>
                  <td>{item.sixover}</td>
                  <td className="clr-green"> {item.tenover}</td>
                  <td className="clr-green"> {item.fifteenover}</td>
                  <td className="clr-green"> {item.sixoverone}</td>
                  <td className="clr-green"> {item.tenoverone}</td>
                  <td className="clr-green"> {item.fifteenoverone}</td>
                  <td className="clr-green"> {item.fancycom}</td>
                  <td className="clr-green"> {item.mfc}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}

export default StatementPopup;
