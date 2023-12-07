import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import "./styles.css";
import StatementPopup from "./StatementPopup";
import DatePicker from "react-datepicker";
import { FaRegCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { Col, Container, Modal, Row } from "react-bootstrap";
import CustomPagination from "../pagination/CustomPagination";
import Table from "../home-page/Table";
import {
  GET_STATEMENT_BY_MATCH_ID,
  GET_FINANCIAL_STATEMENT_BY_DATE,
  GET_OFFLINE_CLIENTS,
} from "../../config/endpoints";
import { call } from "../../config/axios";
import moment from "moment";
import { useHistory, useParams } from "react-router";

function Statement(props) {
  const {
    statementPayload,
    setStatementPayload,
    financialStatementData,
    getStatementData,
    isProcessing,
  } = props;
  const history = useHistory();
  const { id, match, date, winTeam } = useParams();
  const [onePageData, setOnePageData] = useState([]);

  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  let account_role = localStorage?.getItem("account_role");
  const tableColumns = [
    { header: "DATE & TIME", field: "dateTime" },
    { header: "SERIES NAME", field: "seriesName" },
    { header: "TEAM NAME", field: "teamName" },
    { header: "MATCH PLACE", field: "matchplace" },
    { header: "WIN TEAM", field: "winTeam" },
    { header: "P/L", field: "profitLoss" },
    {
      field: "edit",
    },
  ];

  const [popupData, setPopupData] = useState();

  let totalMatchResultData = 0;
  const statementData =
    financialStatementData &&
    financialStatementData?.length > 0 &&
    financialStatementData?.map((match) => {
      totalMatchResultData = financialStatementData.reduce(
        (acc, obj) => acc + (obj.totalAmount?.totalLossOrProfit || 0),
        0
      );

      return {
        series: (
          <div>
            {match?.series_name}
            {/* <br />
            {match?.stadium}
            <br /> */}
          </div>
        ),
        venue: match?.stadium,
        matchPlace: match?.match_place,
        teamName: match?.match_name,
        winTeam: match?.winTeam,
        porL: match?.totalAmount?.totalLossOrProfit,
        matchId: match?.registered_match_id,
        match_name: match?.match_name,
        matchTimeStamp: match?.matchTimeStamp,
      };
    });

  const handleShow = (item) => {
    setShowModal(true);
    setPopupData(item);
  };
  const STATEMENT_DETAILS =
    statementData?.length &&
    statementData?.map((item) => {
      return {
        dateTime: (
          <div className="d-flex flex-column">
            <div> {moment(item?.matchTimeStamp).format("DD-MM-YYYY")}</div>
            <div> {moment(item?.matchTimeStamp).format("hh:mm:ss A")}</div>
          </div>
        ),

        // dateTime: item?.sport_name,
        seriesName: item?.series,
        teamName: (
          <div>
            {/* {item?.team1} VS {item?.team1} */}
            {item?.teamName}
          </div>
        ),
        matchplace: item?.matchPlace,
        winTeam: item?.winTeam,
        profitLoss: (
          <div className={item?.porL >= 0 ? "clr-green" : "clr-red"}>
            {item?.porL}
          </div>
        ),

        // profitLoss: item?.totalAmount?.totalLossOrProfit,
        edit: (
          <div
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
            className="clr-yellow"
            onClick={() => handleShow(item.matchId)}
          >
            Click Here
          </div>
        ),
      };
    });
  const [showModal, setShowModal] = useState(false);

  const [selectedDate, setSelectedDate] = useState(null);

  const onChange = (e) => {};
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // You can add your logic here to fetch data for the selected page.
  };
  const handleChange = (e) => {
    setStatementPayload({
      ...statementPayload,
      [e.target.name]: e.target.value,
    });
  };
  const [existingUsers, setExistingUsers] = useState([]);
  const getAllClientsData = async () => {
    call(GET_OFFLINE_CLIENTS, {
      register_id,
      account_role,
    })
      .then((res) => {
        setExistingUsers(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllClientsData();
  }, []);
  let clientPL = 0,
    refPL = 0,
    matchPL = 0;

  const clientOptions =
    existingUsers &&
    existingUsers.length > 0 &&
    existingUsers.map((item, index) => {
      return {
        clientID: item.client_id,
        clientName: item.client_name,
      };
    });
  const matchOptions =
    financialStatementData &&
    financialStatementData.length > 0 &&
    financialStatementData
      ?.filter((i) => i.match_declared === "Y")
      ?.map((item, index) => {
        return {
          matchName: item.match_name,
        };
      });
  const fancyOptions =
    financialStatementData &&
    financialStatementData.length > 0 &&
    financialStatementData
      ?.filter((i) => i.match_declared === "Y")
      ?.map((item, index) => {
        return {
          matchName: item.match_name,
        };
      });

  return (
    <div className="p-2">
      <hr />
      <Container fluid className="mt-2">
        <Row>
          <Col className="col-lg-2 col-md-3">
            <div>
              <div className="medium-font mb-2">From</div>
              <div className="date-container d-flex justify-content-around align-items-center rounded all-none p-1 w-100">
                <DatePicker
                  className="login-input all-none w-100"
                  name="startDate"
                  id="startDate"
                  value={statementPayload["startDate"] || ""}
                  selected={statementPayload?.startDate}
                  onChange={(e) =>
                    handleChange({ target: { name: "startDate", value: e } })
                  }
                  dateFormat="dd-MM-yy"
                  placeholderText="Select a date"
                />
                <FaRegCalendarAlt className="custom-icon p-1" />
              </div>
            </div>
          </Col>
          <Col className="col-lg-2 col-md-3">
            <div>
              <div className="medium-font mb-2">To</div>
              <div className="date-container d-flex justify-content-around align-items-center rounded all-none p-1 w-100">
                <DatePicker
                  className="login-input all-none w-100"
                  selected={statementPayload?.endDate}
                  name="endDate"
                  id="endDate"
                  value={statementPayload["endDate"] || ""}
                  onChange={(e) =>
                    handleChange({ target: { name: "endDate", value: e } })
                  }
                  dateFormat="dd-MM-yy"
                  placeholderText="Select a date"
                />
                <FaRegCalendarAlt className="custom-icon p-1" />
              </div>
            </div>
          </Col>
          <Col className="col-lg-2 col-md-3">
            <div>
              <div className="medium-font mb-2">Series Name</div>
              <input
                type="text"
                className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
                placeholder="Enter Series Name"
                name="series_name"
                id="series_name"
                value={statementPayload["series_name"] || ""}
                onChange={(e) => handleChange(e)}
              >
                {/* {seriesOptions.map((item, index) => {
                  return (
                    <option key={index} value={item.value}>
                      {item.label}
                    </option>
                  );
                })} */}
              </input>
            </div>
          </Col>
          <Col className="col-lg-1 col-md-3">
            <div>
              <div className="medium-font mb-2">Match Name</div>
              <select
                className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
                name="match_name"
                onChange={(e) => handleChange(e)}
              >
                <option className="w-90 ms-1 cursor-pointer">
                  {statementPayload?.match_name || "Select..."}
                </option>
                {matchOptions?.length &&
                  matchOptions?.map((item, index) => {
                    return (
                      <option key={index} value={item.matchName}>
                        {item.matchName}
                      </option>
                    );
                  })}
              </select>
            </div>
          </Col>
          <Col className="col-lg-2 col-md-3">
            <div>
              <div className="medium-font mb-2">Fancy</div>
              <select
                className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
                name="fancy"
                onChange={(e) => handleChange(e)}
              >
                <option className="w-90 ms-1 cursor-pointer">
                  1st Innings{" "}
                </option>
                <option className="w-90 ms-1 cursor-pointer">
                  2nd Innings{" "}
                </option>
                {/* {fancyOptions.length &&
                  fancyOptions?.map((item, index) => {
                    return (
                      <option key={index} value={item.matchName}>
                        {item.matchName}
                      </option>
                    );
                  })} */}
              </select>
            </div>
          </Col>
          <Col className="col-lg-1 col-md-3">
            <div>
              <div className="medium-font mb-2">Client Name</div>
              <select
                className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
                name="select_client"
                onChange={(e) => handleChange(e)}
              >
                <option className="w-90 ms-1 cursor-pointer">
                  {statementPayload?.client_name || "Select..."}
                </option>
                {clientOptions?.length &&
                  clientOptions?.map((item, index) => {
                    return (
                      <option key={index} value={item.clientName}>
                        {item.clientName}{" "}
                      </option>
                    );
                  })}
              </select>
            </div>
          </Col>
          <Col className="ms-1 me-1 mt-4 col-lg-1 col-md-2">
            <button
              className="submit-button medium-font p-2 rounded all-none"
              disabled={isProcessing}
              onClick={() => {
                getStatementData();
              }}
            >
              {isProcessing ? "Fetching" : "Verify"}
            </button>
          </Col>
          {/* <Col className="ms-1 me-1 mt-4 col-lg-1 col-md-2">
            <button
              className="submit-button medium-font p-2 rounded all-none"
              disabled={isProcessing}
              onClick={() => {
                getStatementData();
              }}
            >
              {isProcessing ? "Fetching..." : "Verify"}
            </button>
          </Col> */}
        </Row>
      </Container>
      <hr />
      <div>
        <Table data={STATEMENT_DETAILS} columns={tableColumns} />
        <table className="w-100 match-position-table small-font">
          <tfoot>
            <tr className="text-center clr-green">
              <th colSpan={5} className="text-end">
                TOTAL
              </th>
              <th className="text-center" colSpan={2}>
                50000000.00
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-4">
        <div className="d-flex justify-content-start font-clr-white total-count-container  py-2 px-4 rounded">
          <span>
            Showing <b> {currentPage} </b> 0f <b> {totalPages} </b> Entries....
          </span>
        </div>
        <div className="d-flex justify-content-end mt-2">
          <CustomPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <StatementPopup
        showModal={showModal}
        setShowModal={setShowModal}
        popupData={popupData}
        statementData={statementData}
        statementPayload={statementPayload}
      />
    </div>
  );
}

export default Statement;
