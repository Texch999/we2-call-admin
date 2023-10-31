import React, { useState } from "react";

function ReferalIndPl(props) {
  const {
    individualReportReferralData,
    setClientsDataForRefferal,
    individualRefferralData,
    invidiualReportReferralHeading,
  } = props;
  const [showIndividualReferealData, setShowIndividualReferalData] =
    useState(false);
  const handleShowIndividualReferalData = () => {
    setShowIndividualReferalData(true);
  };
  const PAGE_REPORT_DETAILS =
    individualReportReferralData?.length &&
    individualReportReferralData?.map((item, index) => ({
      name: item.referral_id,
      rfnet: item.amount,
    }));
  const REFERAL_REPORT_DETAILS =
    individualRefferralData?.length &&
    individualRefferralData?.map((item, index) => ({
      name: item.referral_name,
      pl: item.amount,
    }));
  const CLIENT_PAGE_REPORT_DETAILS = [{}];
  // const CLIENT_PAGE_REPORT_DETAILS = [
  //   {
  //     date: "25-07-2023",
  //     matchname: "India vs Sri Lanka",
  //     winteam: "India",
  //     netpl: "50000000.00",
  //   },
  //   {
  //     date: "25-07-2023",
  //     matchname: "India vs Sri Lanka",
  //     winteam: "India",
  //     netpl: "50000000.00",
  //   },
  //   {
  //     date: "25-07-2023",
  //     matchname: "India vs Sri Lanka",
  //     winteam: "India",
  //     netpl: "50000000.00",
  //   },
  // ];
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
            {PAGE_REPORT_DETAILS.length &&
              PAGE_REPORT_DETAILS?.map((item, index) => (
                <tbody key={index}>
                  <tr
                    className="text-center"
                    onClick={handleShowIndividualReferalData}
                  >
                    <td>{item.name}</td>
                    <td className="clr-green">{item.rfnet}</td>
                  </tr>
                </tbody>
              ))}
            {/* <tfoot>
              <tr className="text-center">
                <th className="text-center">TOTAL</th>
                <th className="clr-green">500000000.00</th>
              </tr>
            </tfoot> */}
          </table>
        </div>
        {showIndividualReferealData && (
          <>
            <div className="d-flex flex-column w-70">
              <div className="mb-2">
                {/* <div className="all-match-button share-risk-match-button w-25 text-start btn btn-primary">
              Referal - Animesh
            </div> */}
                <table className="match-position-table medium-font w-100">
                  <thead>
                    <tr className="text-center">
                      <th className="text-start">Referal -</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div>
                <table className="w-100 match-position-table medium-font">
                  <thead>
                    <tr>
                      <th className="text-start">REFERAL NAME</th>
                      <th className="text-end">TOTAL P/L</th>
                    </tr>
                  </thead>
                  {REFERAL_REPORT_DETAILS?.map((item, index) => (
                    <tbody key={index}>
                      <tr className="text-end">
                        <td className="text-start">{item.name}</td>
                        <td className="text-end clr-green">{item.pl}</td>
                      </tr>
                    </tbody>
                  ))}
                  <tfoot>
                    <tr className="text-end">
                      <th className="text-start">TOTAL</th>
                      <th className="clr-green text-end">500000000.00</th>
                    </tr>
                  </tfoot>
                </table>
              </div>{" "}
              <div className="mt-2 mb-2">
                <table className="match-position-table medium-font w-100">
                  <thead>
                    <tr className="text-center">
                      <th className="text-start">
                        Rf - Animesh Match Wise P/L
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div>
                {/* <AdminsTable data={PAGE_REPORT_DETAILS} columns/> */}
                <table className="w-100 match-position-table medium-font">
                  <thead>
                    <tr className="text-center">
                      <th>DATE</th>
                      <th>MATCH NAME</th>
                      <th>WIN TEAM</th>
                      <th>NET P/L</th>
                    </tr>
                  </thead>
                  {CLIENT_PAGE_REPORT_DETAILS?.map((data, index) => (
                    <tbody key={index}>
                      <tr className="text-center">
                        <td>{data.date}</td>
                        <td>{data.matchname}</td>
                        <td>{data.winteam}</td>
                        <td className="clr-green">{data.netpl}</td>
                      </tr>
                    </tbody>
                  ))}
                  <tfoot>
                    <tr className="text-center">
                      <th colSpan={3} className="text-end">
                        TOTAL
                      </th>
                      <th className="clr-green">500000000.00</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ReferalIndPl;
