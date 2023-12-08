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
  GET_COMPLETE_MATCHES_BY_CLIENT_NAME,
  GET_FINANCIAL_STATEMENT_BY_DATE,
  GET_OFFLINE_CLIENTS,
  GET_STATEMENT_BY_MATCH_ID,
} from "../../config/endpoints";
import { call } from "../../config/axios";
import moment from "moment";

function Statement(props) {
  const register_id = localStorage?.getItem("register_id");
  const creator_id = localStorage?.getItem("creator_id");
  const account_role = localStorage?.getItem("account_role");
  const [isProcessing, setIsProcessing] = useState(false);
  const [financialStatementData, setFinancialStatementData] = useState([]);
  const [existingUsers, setExistingUsers] = useState([]);
  const [selectedClientName, setSelectedClientName] = useState("");
  const [selectedMatchName, setSelectedMatchName] = useState("");
  const [selectedMatch, setSelctedMatch] = useState('');
  const [onePageData, setOnePageData] = useState([]);

  const [statementPayload, setStatementPayload] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
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
  // const STATEMENT_DETAILS =
  //   financialStatementData?.map((item) => {
  //     return {
  //       dateTime: item?.sport_name,
  //       seriesName: item?.series_name,
  //       teamName: (
  //         <div>
  //           {item?.team1} VS {item?.team1}
  //         </div>
  //       ),
  //       matchplace: item?.stadium,
  //       winTeam: item?.winTeam,
  //       profitLoss: item?.totalAmount?.totalLossOrProfit,
  //       edit: (
  //         <AiFillEdit
  //           data-toggle="modal"
  //           data-target=".bd-example-modal-lg"
  //           className="custom-icon"
  //           onClick={() => handleShow()}
  //         />
  //       ),
  //     };
  //   });
  let totalMatchResultData = 0;

  totalMatchResultData = financialStatementData && financialStatementData?.length > 0 && financialStatementData?.reduce(
    (acc, obj) => acc + (obj.totalAmount?.totalLossOrProfit || 0),
    0
  );

  const getStatementByMatchIdData = async (id) => {
    setIsProcessing(true);
    await call(GET_STATEMENT_BY_MATCH_ID, {
      register_id,
      registered_match_id: id,
    })
      .then((res) => {
        setIsProcessing(false);
        setOnePageData(res?.data?.data?.client_object);
      })
      .catch((err) => {
        setIsProcessing(false);
        console.log(err);
      });
  };

  const STATEMENT_DETAILS =
    financialStatementData &&
    financialStatementData?.length > 0 &&
    financialStatementData?.map((match) => {
      return {
        dateTime: `${moment(match?.matchTimeStamp).format(
          "DD-MM-YYYY"
        )}- ${moment(match?.matchTimeStamp).format("hh:mm:ss A")}`,
        seriesName: match?.series_name,
        teamName: (
          <div>
            {match?.match_name}
          </div>
        ),
        matchplace: match?.match_place,
        winTeam: match?.winTeam,
        profitLoss: match?.totalAmount?.totalLossOrProfit,
        edit: (
          <AiFillEdit
            data-toggle="modal"
            data-target=".bd-example-modal-lg"
            className="custom-icon"
            onClick={() =>{
              setSelctedMatch(match)
              setShowModal(true)
              getStatementByMatchIdData(match?.registered_match_id)
            }}
          />
        ),
      };
    });

  const seriesOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const matchOptions = [
    { value: "India-srilanka", label: "IND vs SL" },
    { value: "pak-aus", label: "PAK vs AUS" },
    { value: "sounth africa-newzeland", label: "SA vs NZ" },
  ];
  const fancyOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const clientOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = STATEMENT_DETAILS ? Math.ceil((STATEMENT_DETAILS?.length / 5)) : 0

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
  const getStatementData = async () => {
    setIsProcessing(true);
    await call(GET_FINANCIAL_STATEMENT_BY_DATE, {
      register_id,
      account_role,
      ...statementPayload,
    })
      .then((res) => {
        setIsProcessing(false);
        // const result = res?.data?.data?.Items;
        setFinancialStatementData(
          res?.data?.data?.filter((item) => item?.match_declared === "Y")
        );
        // console.log(result,"result");
      })
      .catch((err) => {
        setIsProcessing(false);
        throw err;
      });
  };

  const getCompleteMatchesByClientName = async () => {
    setIsProcessing(true);
    await call(GET_COMPLETE_MATCHES_BY_CLIENT_NAME, {
      register_id,
      account_role,
      ...statementPayload,
      client_name: selectedClientName?.client_name,
    })
      .then((res) => {
        setIsProcessing(false);
        // const result = res?.data?.data?.Items;
        // console.log("res?.data?.data", res?.data?.data)
        setFinancialStatementData(
          res?.data?.data?.filter((item) => item?.match_declared === "Y")
        );
        // console.log(result,"result");
      })
      .catch((err) => {
        setIsProcessing(false);
        throw err;
      });
  };

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

  const handleMatchesListSelect = (value) => {
    setSelectedMatchName(value);
    setStatementPayload({ ...statementPayload, match_name: value });
  };
  const handleSelectClientName = (value) => {
    const index =
      existingUsers &&
      existingUsers?.length > 0 &&
      existingUsers?.findIndex((i) => i.client_id === value);
    // console.log("value", value,existingUsers[index])
    setSelectedClientName({
      client_id: value,
      client_name: existingUsers[index]?.client_name,
    });
  };



  useEffect(() => {
    getAllClientsData();
    getStatementData();
  }, []);

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
                  className="login-input all-none w-50"
                  name="startDate"
                  selected={statementPayload?.startDate}
                  onChange={(e) =>
                    handleChange({
                      target: {
                        name: "startDate",
                        value: e,
                      },
                    })
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
                  className="login-input all-none w-50"
                  selected={statementPayload.endDate}
                  onChange={(e) =>
                    handleChange({
                      target: {
                        name: "endDate",
                        value: e,
                      },
                    })
                  }
                  name="endDate"
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
                placeholder="Series Name"
                className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
                name="series_name"
                id="series_name"
                value={statementPayload["series_name"] || ""}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </Col>
          <Col className="col-lg-1 col-md-3">
            <div>
              <div className="medium-font mb-2">Match Name</div>
              <select
                className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
                name="match_name"
                onChange={(e) => handleMatchesListSelect(e)}
              >
                {financialStatementData &&
                  financialStatementData?.length > 0 &&
                  financialStatementData
                    ?.filter((i) => i.match_declared === "Y")
                    ?.map(({ match_name }, index) => {
                      return (
                        <option key={index} value={match_name}>
                          {match_name}
                        </option>
                      );
                    })}
              </select>
            </div>
          </Col>
          {/* <Col className="col-lg-1 col-md-3">
            <div>
              <div className="medium-font mb-2">Fancy</div>
              <select
                className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
                name="fancy"
                onChange={(e) => handleChange(e)}
              >
                {fancyOptions.map((item, index) => {
                  return (
                    <option key={index} value={item.value}>
                      {item.label}
                    </option>
                  );
                })}
              </select>
            </div>
          </Col> */}
          <Col className="col-lg-2 col-md-3">
            <div>
              <div className="medium-font mb-2">Client Name</div>
              <select
                className="w-100 custom-select medium-font btn-bg rounded all-none p-2"
                name="client_name"
                onChange={(e) => handleSelectClientName(e.target.value)}
              >
                {existingUsers &&
                  existingUsers?.length > 0 &&
                  existingUsers?.map(({ client_name, client_id }, index) => {
                    return (
                      <option key={index} value={client_id}>
                        {client_name}
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
                selectedClientName?.client_name
                  ? getCompleteMatchesByClientName()
                  : getStatementData();
              }}
            >
              {isProcessing ? "Fetching..." : "Verify"}
            </button>
          </Col>
        </Row>
      </Container>
      <hr />
      <div>
        <Table data={STATEMENT_DETAILS} columns={tableColumns} />
        <tfoot>
          <tr className="text-center clr-green">
            <th colSpan={5} className="text-end">
              TOTAL
            </th>
            <th className="text-center" colSpan={2}>
              {totalMatchResultData ? totalMatchResultData?.toFixed(2) : 0}
            </th>
          </tr>
        </tfoot>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-4">
        {totalPages > 1 && <div className="d-flex justify-content-start font-clr-white total-count-container  py-2 px-4 rounded">
          <span>
            Showing <b> {currentPage} </b> 0f <b> {totalPages} </b> Entries....
          </span>
        </div>}
        <div className="d-flex justify-content-end mt-2">
          <CustomPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <StatementPopup showModal={showModal} onePageData={onePageData} setShowModal={setShowModal} setSelctedMatch={setSelctedMatch} selectedMatch={selectedMatch} />
    </div>
  );
}

export default Statement;
