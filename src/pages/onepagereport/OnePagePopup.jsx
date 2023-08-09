import React, { useState } from "react";
import { Modal, Col, Row } from "antd";
import MatchFancyReferalTable from "./MatchFancyReferalTable";
import ReferalnetTable from "./ReferalnetTable";
import ULshareTable from "./ULshareTable";
import "./styles.css";

function OnePagePopup(props) {
  const { openOnepagePopup, setOpenOnePagePopup } = props;
  const handleOnepageClose = () => {
    setOpenOnePagePopup(false);
  };
  const reportButtonList = [
    "Match+Fancy+Referal Comm = Total",
    "Referal Net",
    "UL Share",
  ];
  const [activereportIndex, setActiveReportIndex] = useState(0);
  const handleReportPageSelect = (value) => {
    setActiveReportIndex(value);
  };
  return (
    <Modal
      open={openOnepagePopup}
      onCancel={() => handleOnepageClose()}
      className="login-modal w-60"
      centered
      footer={null}
    >
      <div>
        <div className="date-container w-20 font-12">Date : 24/07/2023</div>
        <div className="flex-row flex-space-between w-80 mt-20">
          {reportButtonList.map((value, index) => {
            return (
              <div
                key={index}
                className={
                  activereportIndex === index
                    ? "active-report-button flex-center"
                    : "deactive-report-button flex-center"
                }
                onClick={() => handleReportPageSelect(index)}
              >
                {value}
              </div>
            );
          })}
        </div>
        {activereportIndex === 0 && <MatchFancyReferalTable />}
        {activereportIndex === 1 && <ReferalnetTable />}
        {activereportIndex === 2 && <ULshareTable />}
      </div>
    </Modal>
  );
}

export default OnePagePopup;
