import { Modal} from "antd";
import React, { useState } from "react";
import {  BiDownArrowCircle } from "react-icons/bi";

import ClientPLTable from "./ClientPLTable";
import RfPlTable from "./RfPlTable";
function StatementIndividualModal(props) {
  const { openStatementIndividualPopup, setOpenStatementIndividualPopup } =
    props;
  const handleStatementIndividualClose = () => {
    setOpenStatementIndividualPopup(false);
  };
  const statementButtonList = ["Client P/L", "RF P/L"];
  const [activeStatementIndex, setActiveStatementIndex] = useState(0);
  const handleStatementPageSelect = (value) => {
    setActiveStatementIndex(value);
  };

  return (
    <Modal
      open={openStatementIndividualPopup}
      onCancel={() => handleStatementIndividualClose()}
      className="login-modal w-70"
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
            {statementButtonList.map((value, index) => {
              return (
                <div
                  key={index}
                  className={
                    activeStatementIndex === index
                      ? "details-btn h-20p font-12 w-20 br-40 clr-yellow flex-space-between p-10 flex-row ml-5 mr-5 yellow-border"
                      : "details-btn h-20p font-12 w-20 br-40 clr-white flex-space-between p-10 flex-row ml-5 mr-5 white-border"
                  }
                  onClick={() => handleStatementPageSelect(index)}
                >
                  <BiDownArrowCircle
                    className={
                      activeStatementIndex === index
                        ? "font-18 clr-yellow"
                        : "font-18 clr-white"
                    }
                  />
                  {value}
                </div>
              );
            })}
          </div>
        </div>
        {activeStatementIndex === 0 && <ClientPLTable />}
        {activeStatementIndex === 1 && <RfPlTable />}
      </div>
    </Modal>
  );
}

export default StatementIndividualModal;
