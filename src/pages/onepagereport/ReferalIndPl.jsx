import React, { useEffect, useState } from "react";
import {
  GET_INDUVISUAL_REFERRAL_BY,
  GET_INDUVISUAL_MATCH_REPORT,
} from "../../config/endpoints";
import { call } from "../../config/axios";
import moment from "moment";

function ReferalIndPl(props) {
  const { individualReportReferralData } = props;
  const [showIndividualReferealData, setShowIndividualReferalData] =
    useState(false);

  const register_id = localStorage.getItem("register_id");

  const [referData, setReferData] = useState();
  const [indClientData, setIndClientdata] = useState();
  const [indivisualMatchReportData, setIndivisualMatchReportData] = useState(
    []
  );
  const [clientsDataForRefferal, setClientsDataForRefferal] = useState([]);
  const [showMatchWiseRfPl, setShowMatchWiseRfPl] = useState(false);

  console.log(referData, "sangram referData");
  console.log(clientsDataForRefferal, "sangram clientsDataForRefferal");

  const handleRefid = async (item) => {
    setReferData(item);
    setShowIndividualReferalData(true);
    await call(GET_INDUVISUAL_REFERRAL_BY, {
      register_id,
      refferal_id: item.referral_id,
    })
      .then((res) => {
        setClientsDataForRefferal(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  const handleClientID = async (item) => {
    setIndClientdata(item);
    setShowMatchWiseRfPl(true);
    await call(GET_INDUVISUAL_MATCH_REPORT, {
      register_id,
      client_id: item.client_id,
    })
      .then((res) => {
        // console.log("res?.data?.data",[...res?.data?.data?.topLosers, ...res?.data?.data?.topWinners])
        // setIndivisualMatchReportData([
        //   ...res?.data?.data?.data,
        //   // ...res?.data?.data?.topWinners,
        // ]);
        setIndivisualMatchReportData([
          ...res?.data?.data?.topLosers,
          ...res?.data?.data?.topWinners,
        ]);
      })
      .catch((err) => console.log(err));
  };
  const PAGE_REPORT_DETAILS =
    individualReportReferralData?.length &&
    individualReportReferralData?.map((item, index) => ({
      name: <div onClick={() => handleRefid(item)}>{item.referral_name}</div>,
      rfnet: <div>{item.amount}</div>,
    }));

  const CLIENT_PAGE_REPORT_DETAILS =
    clientsDataForRefferal?.length > 0 &&
    clientsDataForRefferal?.map((item) => {
      return {
        // clientname: item.client_name,
        clientname: (
          <div onClick={() => handleClientID(item)}>{item.client_name}</div>
        ),
        amount: (
          <div
            className={item?.referralTotalNet >= 0 ? "green-clr" : "red-clr"}
          >
            {item?.referralTotalNet ? item?.referralTotalNet?.toFixed(2) : 0}
          </div>
        ),
      };
    });
  // const REFERAL_REPORT_DETAILS =
  //   indivisualMatchReportData?.length > 0 &&
  //   indivisualMatchReportData?.map((item, index) => ({
  //     matchName: "Sangram",
  //     matchDate: "",
  //     winTeam: "",
  //     amount: "",
  //   }));
  const REFERAL_REPORT_DETAILS =
    indivisualMatchReportData &&
    indivisualMatchReportData?.length > 0 &&
    indivisualMatchReportData?.map((match) => {
      const netPL = match?.referralComission + match?.referalShare;
      return {
        matchName: (
          <div>
            <div>{match?.match_name}</div>
          </div>
        ),
        matchDate: (
          <div>{moment(match?.matchTimeStamp).format("DD-MM-YYYY")}</div>
        ),

        winTeam: match?.winTeam,
        amount: (
          <div className={netPL >= 0 ? "clr-green" : "clr-red"}>{netPL}</div>
        ),
      };
    });
  return (
    <div>
      <h6 className="Platform-Comm-PL-">Referal :</h6>
      <div className="d-flex flex-row w-100 justify-content-between">
        <div className="w-30">
          <table className="w-100 match-position-table medium-font">
            <thead>
              <tr className="text-center">
                <th>REFERAL NAME</th>
                <th>TOTAL P/L</th>
              </tr>
            </thead>
          </table>
          <div className="referal-table-scroll-content">
            <table className="w-100 match-position-table medium-font">
              {PAGE_REPORT_DETAILS?.length &&
                PAGE_REPORT_DETAILS?.map((item, index) => (
                  <tbody key={index}>
                    <tr
                      className="text-center"
                      // onClick={handleShowIndividualReferalData}
                    >
                      <td>{item.name}</td>
                      <td className="clr-green">{item.rfnet}</td>
                    </tr>
                  </tbody>
                ))}
            </table>
            <table className="w-100 match-position-table medium-font">
              <tfoot>
                <tr className="text-end">
                  <th className="text-start">TOTAL</th>
                  <th className="clr-green text-end">
                    10000.00
                    {/* {totalUrsNet ? totalUrsNet?.toFixed(2) : null} */}
                  </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
        {showIndividualReferealData && (
          <>
            <div className="d-flex flex-column w-70">
              <div className="mb-2">
                <table className="match-position-table medium-font w-100">
                  <thead>
                    <tr className="text-center">
                      <th className="text-start">
                        Referal -
                        <span className="clr-yellow">
                          {referData.referral_name}
                        </span>
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div>
                <table className="w-100 match-position-table medium-font">
                  <thead>
                    <tr>
                      <th className="text-start">CLIENT NAME</th>
                      <th className="text-end">TOTAL P/L</th>
                    </tr>
                  </thead>
                </table>
                <div className="table-scroll-content h-15vh">
                  <table className="w-100 match-position-table medium-font">
                    {CLIENT_PAGE_REPORT_DETAILS?.length &&
                      CLIENT_PAGE_REPORT_DETAILS?.map((item, index) => (
                        <tbody>
                          <tr>
                            <td>{item.clientname}</td>
                            <td className="text-end">{item.amount}</td>
                          </tr>
                        </tbody>
                      ))}
                  </table>
                </div>
                <table className="w-100 match-position-table medium-font">
                  <tfoot>
                    <tr className="text-end">
                      <th className="text-start">TOTAL</th>
                      <th className="clr-green text-end">500000000.00</th>
                    </tr>
                  </tfoot>
                </table>
              </div>{" "}
              {showMatchWiseRfPl && (
                <>
                  <div className="mt-2 mb-2">
                    <table className="match-position-table medium-font w-100">
                      <thead>
                        <tr className="text-center">
                          <th className="text-start">
                            Rf -
                            <span className="clr-yellow mx-1">
                              {indClientData.client_name}{" "}
                            </span>
                            Match Wise Rf P/L
                          </th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className="table-scroll-content h-15vh">
                    <table className="w-100 match-position-table medium-font">
                      <thead>
                        <tr className="text-center">
                          <th>DATE</th>
                          <th>MATCH NAME</th>
                          <th>WIN TEAM</th>
                          <th>NET P/L</th>
                        </tr>
                      </thead>
                    </table>
                    {/* <AdminsTable data={PAGE_REPORT_DETAILS} columns/> */}
                    <div>
                      <table className="w-100 match-position-table medium-font">
                        {REFERAL_REPORT_DETAILS?.length &&
                          REFERAL_REPORT_DETAILS?.map((item, index) => (
                            <tbody key={index}>
                              <tr className="text-center">
                                <td>{item.matchName}</td>
                                <td>{item.matchDate}</td>
                                <td>{item.winTeam}</td>
                                <td>{item.amount}</td>
                              </tr>
                            </tbody>
                          ))}
                      </table>
                    </div>
                  </div>
                  <table className="w-100 match-position-table medium-font">
                    <tfoot>
                      <tr className="text-end">
                        <th className="text-start">TOTAL</th>
                        <th className="clr-green text-end">500000000.00</th>
                      </tr>
                    </tfoot>
                  </table>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ReferalIndPl;
