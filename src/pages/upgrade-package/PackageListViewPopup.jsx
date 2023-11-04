import { Col, Container, Modal, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function PackageListViewPopup(props) {
  const { showPackageListPopup, setShowPackageListPopup } = props;
  const handleClosePackageList = () => {
    setShowPackageListPopup(false);
  };
  const tableHeadingList = [{}];
  const TableData = [
    {
      packagename: "Standard",
      purchase: "2",
      price: "4000",
      returnpkg: "2",
      returnhrs: "400",
    },
    {
      packagename: "Silver",
      purchase: "5",
      price: "10000",
      returnpkg: "2",
      returnhrs: "1000",
    },
    {
      packagename: "Gold",
      purchase: "10",
      price: "15000",
      returnpkg: "4",
      returnhrs: "1500",
    },
    {
      packagename: "Diamond",
      purchase: "20",
      price: "20000",
      returnpkg: "8",
      returnhrs: "2000",
    },
    {
      packagename: "VIP",
      purchase: "25",
      price: "20000",
      returnpkg: "10",
      returnhrs: "2000",
    },
  ];
  return (
    <div className="yellow-border">
      <Modal
        size="md"
        show={showPackageListPopup}
        onHide={handleClosePackageList}
        centered
        className="match-share-modal payment-modal"
      >
        <Modal.Header closeButton>
          <div className="p-4 yllow-border">
            <table className="w-100 match-position-table medium-font">
              <thead>
                <tr>
                  <th>Package</th>
                  <th>Purchase</th>
                  <th>Price</th>
                  <th>Return Pkg</th>
                  <th>Return Hrs</th>
                </tr>
              </thead>
              {TableData.map((item, index) => {
                return (
                  <tbody>
                    <tr className="text-center">
                      <td>{item.packagename}</td>
                      <td>{item.purchase}</td>
                      <td>{item.price}</td>
                      <td>{item.returnpkg}</td>
                      <td>{item.returnhrs}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
            <div className="btn-bg small-font p-1">
              <div className="d-flex flex-row align-items-center justify-content-between w-100 px-2 mt-2">
                <div className="d-flex flex-column w-50 me-2">
                  <div className="d-flex flex-row justify-content-between">
                    <div>Total Purchase</div>
                    <div>
                      62 = <span>150000 </span>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div className="text-start">Return Package</div>
                    <div>
                      26 = <span>30000 </span>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>Return Hrs</div>{" "}
                    <div>
                      26 = <span>30000 </span>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column w-50 ms-2">
                  <div className="d-flex flex-row justify-content-between">
                    <div>Discount</div>
                    <div>
                      5% = <span>7500 </span>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>Special Offer</div>
                    <div>
                      5% = <span>7500 </span>
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-between">
                    <div>Paid Amount</div>
                    <div>105000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Header>
      </Modal>
    </div>
  );
}

export default PackageListViewPopup;
