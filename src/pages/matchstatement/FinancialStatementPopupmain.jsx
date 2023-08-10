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
  const reportList = ["One Page Report", "Individual P/L Report"];
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
      className="login-modal w-60"
      centered
      footer={null}
    >
      <div className="homepage">
        <div>
          <div className="font-30 flex-start fw-600 mt-20">One Page Report</div>
          <div className="flex-start flex-row w-60 mt-10 mb-10">
            {reportList.map((value, index) => {
              return (
                <div
                  key={index}
                  className={
                    activeIndex === index
                      ? "active-button flex-center w-30 h-40p font-14 clr-green mt-5 mb-5 clr-black fw-600 ml-10 mr-10"
                      : "deactive-button flex-center w-30 h-40p font-14 clr-yelow mt-5 mb-5 clr-white fw-600 ml-10 mr-10"
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
      </div>
    </Modal>
  );
}

export default FinancialStatementPopupmain;
