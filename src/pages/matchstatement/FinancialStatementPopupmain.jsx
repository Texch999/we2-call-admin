import React, { useState } from "react";
import "./styles.css";
import FinancialUlSharePopup from "./FinancialUlSharePopup";
import FinancialReferalPopup from "./FinancialReferalPopup";
import FinanceClientModal from "./FinanceClientModal";
import { Modal } from "antd";

function FinancialStatementPopupmain(props) {
  const {
    openFinancialoStatementIndividualPopup,
    setOpenFinancialStatementIndividualPopup,
  } = props;
  const reportList = ["Client", "Referal", "UL Share"];
  const [activeIndex, setActiveIndex] = useState(0);
  const handleReportSelect = (value) => {
    setActiveIndex(value);
  };
  const handleCloseStatementModal = () => {
    setOpenFinancialStatementIndividualPopup(false);
  };
  return (
    <Modal
      open={openFinancialoStatementIndividualPopup}
      onCancel={() => handleCloseStatementModal()}
      className="login-modal w-50"
      centered
      footer={null}
    >
      <div>
        <div className="font-14 flex-start fw-600 mb-10">
          Match Name : India Vs SL
        </div>
        <div className="date-container w-20 font-12">Date : 24/07/2023</div>
        <div className="flex-start flex-row w-60 mt-10 mb-10">
          {reportList.map((value, index) => {
            return (
              <div
                key={index}
                className={
                  activeIndex === index
                    ? "deactive-button flex-center w-20 h-30p font-12 clr-green mt-5 mb-5 clr-white fw-600 ml-10 mr-10 yellow-border"
                    : "deactive-button flex-center w-20 h-30p font-12 clr-yelow mt-5 mb-5 clr-white fw-600 ml-10 mr-10"
                }
                onClick={() => handleReportSelect(index)}
              >
                {value}
              </div>
            );
          })}
        </div>
        {activeIndex === 0 && <FinanceClientModal />}
        {activeIndex === 1 && <FinancialReferalPopup />}
        {activeIndex === 2 && <FinancialUlSharePopup />}
      </div>
    </Modal>
  );
}

export default FinancialStatementPopupmain;
