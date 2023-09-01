import { Col, Container, Modal, Row } from "react-bootstrap";
import { Button, Table, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { FaPlus, FaMinus, FaArrowRight } from "react-icons/fa6";
import { RxCrossCircled } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";
import { PiArrowsOutLight } from "react-icons/pi";
import MatchSubmitPopup from "../match-popups/MatchSubmitPopup";

function AdminSaleTicketPopup(props) {
  const { showPackageUpgrade, setShowPackageUpgrade } = props;
  const handleAdminTicketPopupClose = () => {
    setShowPackageUpgrade(false);
  };
  const [acceptClick, setAcceptClick] = useState(false);
  const handleAcceptClickPopupOpen = () => {
    setAcceptClick(true);
    setShowPackageUpgrade(false);
  };

  const selectReasons = [
    { header: "Insufficient Balance" },
    { header: "Payment Not Verified" },
    { header: "Wrong Payment Slip" },
  ];
  const tableData = [
    {
      package: "Standard",
      purchase: "2",
      price: "4000",
      returnpkg: "2",
      retrunhrs: "400",
    },
    {
      package: "Silver",
      purchase: "5",
      price: "10000",
      returnpkg: "2",
      retrunhrs: "1000",
    },
    {
      package: "Gold",
      purchase: "10",
      price: "15000",
      returnpkg: "4",
      retrunhrs: "1500",
    },
    {
      package: "Diamond",
      purchase: "20",
      price: "20000",
      returnpkg: "8",
      retrunhrs: "2000",
    },
    {
      package: "VIP",
      purchase: "25",
      price: "20000",
      returnpkg: "10",
      retrunhrs: "2000",
    },
  ];
  return (
    <div className="modal fade bd-example-modal-lg container mt-5">
      <Modal
        size="md"
        show={showPackageUpgrade}
        onHide={handleAdminTicketPopupClose}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
          <div className="w-100 p-4 flex-columnn relative-position">
            <div className="d-flex justify-content-start">
              <div className="w-25 small-font d-flex align-items-center ">
                Srinivas
                <button className="yellow-btn rounded clr-orange mx-2">
                  SM
                </button>
                <div className="rounded-pill small-font p-1 completed-btn">
                  Deposit
                </div>
              </div>
            </div>
            <div className="d-flex flex-row w-100 custom-select small-font btn-bg rounded all-none  align-items-center justify-content-between my-2 px-2 py-2">
              <div>Trx ID</div>
              <div>#trx-id-20230713134510227530</div>
            </div>
            <div className="d-flex flex-row w-100 custom-select small-font btn-bg rounded all-none  align-items-center justify-content-between my-2 px-2 py-2">
              <div>Reference ID</div>
              <div>mast-20221219180735153168</div>
            </div>
            <div className="d-flex flex-column px-2 btn-bg rounded">
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div>Amount</div>
                <div>20000</div>
              </div>
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div>Payment Method</div>
                <div>UPI</div>
              </div>
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div>From</div>
                <div>Srinivas-Sub Admin</div>
              </div>
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div>To</div>
                <div>Jayanta-Admin</div>
              </div>
              <div className="d-flex flex-row justify-content-between small-font  all-none  align-items-center justify-content-between my-1 ">
                <div>Time</div>
                <div>2023-07-13, 13:45:10 PM</div>
              </div>
            </div>
            <div className="w-100 my-2 relative-position">
              <img
                className="w-100"
                src={process.env.PUBLIC_URL + "./assets/banner_bg.png"}
              />
              <PiArrowsOutLight className="zoom-icon" />
            </div>
            <Dropdown
              size="lg"
              className="user-dropdown-toggle custom-button-drop small-font mt-2"
            >
              <Dropdown.Toggle>
                <div className="d-flex align-itens-center justify-content-between p-1">
                  <div>Package List</div>
                  <span style={{ float: "right" }} className="clr-yellow">
                    View
                  </span>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="custom-menu-item px-1">
                <table className="w-100 match-position-table small-font clr-white">
                  <thead>
                    <tr className="text-center">
                      <td>Package</td>
                      <td>Purchase</td>
                      <td>Price</td>
                      <td>Return Pkg</td>
                      <td>Return Hrs</td>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((item, index) => (
                      <tr key={index} className="text-center">
                        <td>{item.package}</td>
                        <td>{item.purchase}</td>
                        <td>{item.price}</td>
                        <td>{item.returnpkg}</td>
                        <td>{item.retrunhrs}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="small-font justify-content-between w-100"></tfoot>
                </table>
                <Dropdown.Item className="rounded my-2 d-flex flex-row ps-0 pe-0">
                  <div className="d-flex flex-row w-100 justify-content-between small-font">
                    <div className="d-flex flex-column w-50 mx-2 my-1">
                      <div className="d-flex flex-row justify-content-between">
                        <span>Total Purchase</span>
                        <span>62 = 150000</span>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <span>Return Pkg</span>
                        <span>26 = 30000</span>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <span>Return Hrs</span>
                        <span>26 = 30000</span>
                      </div>
                    </div>
                    <div className="d-flex flex-column w-50 mx-2 my-1">
                      <div className="d-flex flex-row justify-content-between">
                        <span>Discount</span>
                        <span>5% = 7500</span>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <span>Special Offer</span>
                        <span>5% = 7500</span>
                      </div>
                      <div className="d-flex flex-row justify-content-between">
                        <span>Paid Amount</span>
                        <span>105000</span>
                      </div>
                    </div>
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown
              size="lg"
              className="user-dropdown-toggle custom-button-drop small-font mt-2"
            >
              <Dropdown.Toggle>
                <div className="d-flex align-itens-center justify-content-between p-1">
                  <div>Select Rejection Reason</div>
                  <RiArrowDropDownLine
                    style={{ fontSize: "20px", float: "right" }}
                  />
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="custom-menu-item px-1">
                {selectReasons.map((data, index) => (
                  <Dropdown.Item
                    key={index}
                    className="rounded my-1 d-flex flex-row justify-content-between"
                  >
                    <div>
                      <span className="mx-1">{data.header}</span>
                    </div>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <div className="d-flex flex-row w-100 custom-select small-font btn-bg rounded all-none  align-items-center justify-content-between my-2 px-2 py-2">
              <input
                type="text"
                placeholder="Specify Other Reason"
                className="w-100 custom-select small-font btn-bg rounded all-none p-2 small-font textinput "
              ></input>
            </div>
            <Container fluid className="mt-2">
              <Row>
                <Col className="ps-0">
                  <button
                    type="submit"
                    className="submit-button mt-2 small-font p-2 rounded all-none mb-2"
                    onClick={() => handleAcceptClickPopupOpen()}
                  >
                    Approved
                  </button>
                </Col>
                <Col className="pe-0">
                  <button
                    type="submit"
                    className="submit-button mt-2 small-font p-2 rounded all-none w-100 mb-2"
                    onClick={() => handleAdminTicketPopupClose()}
                  >
                    Rejected
                  </button>
                </Col>
              </Row>
            </Container>
          </div>
        </Modal.Header>
      </Modal>
      <MatchSubmitPopup
        header={"Ticket Upgraded Successfully"}
        state={acceptClick}
        setState={setAcceptClick}
      />
    </div>
  );
}

export default AdminSaleTicketPopup;
