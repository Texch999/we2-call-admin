import React, { useState } from "react";
import ClientPLData from "./ClientPLData";
import AdminsTable from "../onepagereport/AdminsTable";
import { Col, Container, Row } from "react-bootstrap";
import { GiClick } from "react-icons/gi";
import { totalSum } from "../../utils";
function ClientPLTable(props) {
  const { selectedMatch, data } = props;
  const CLIENTPL_DETAILS =
    data &&
    data?.length > 0 &&
    data?.map((report) => {
      return {
        name: report?.client_name,
        matchpl: report?.matchEntryResult?.amount,
        fancyPl: report?.fancyEntryResult?.amount,
        mcFc: report?.clientComission,
        rfc: report?.clientFancyComission,
        totalCommission: +report?.clientComission + +report?.clientFancyComission,
        cShare: report?.clientShare,
        cNet: report?.clientNet,
        reportDetails: report
      };
    });
  //  [
  //   {
  //     name: "Animesh",
  //     matchpl: "1000000.00",
  //     sixover: "500000.00",
  //     tenover: "500000.00",
  //     fifteenover: "500000.00",
  //     sixoverone: "500000.00",
  //     tenoverone: "500000.00",
  //     fifteenoverone: "500000.00",
  //     fancycom: "500000.00",
  //     mfc: "500000.00",
  //   },
  //   {
  //     name: "Animesh",
  //     matchpl: "1000000.00",
  //     sixover: "500000.00",
  //     tenover: "500000.00",
  //     fifteenover: "500000.00",
  //     sixoverone: "500000.00",
  //     tenoverone: "500000.00",
  //     fifteenoverone: "500000.00",
  //     fancycom: "500000.00",
  //     mfc: "500000.00",
  //   },
  //   {
  //     name: "Animesh",
  //     matchpl: "1000000.00",
  //     sixover: "500000.00",
  //     tenover: "500000.00",
  //     fifteenover: "500000.00",
  //     sixoverone: "500000.00",
  //     tenoverone: "500000.00",
  //     fifteenoverone: "500000.00",
  //     fancycom: "500000.00",
  //     mfc: "500000.00",
  //   },
  //   {
  //     name: "Animesh",
  //     matchpl: "1000000.00",
  //     sixover: "500000.00",
  //     tenover: "500000.00",
  //     fifteenover: "500000.00",
  //     sixoverone: "500000.00",
  //     tenoverone: "500000.00",
  //     fifteenoverone: "500000.00",
  //     fancycom: "500000.00",
  //     mfc: "500000.00",
  //   },
  // ];
  const [showClientPL, setShowClientPL] = useState(false);
  const handleClientData = () => {
    setShowClientPL((prev) => !prev);
  };

  const totalMatchPl = data && data?.length > 0 && data?.reduce((acc, obj) => acc + (+obj?.matchEntryResult?.amount || 0), 0);
  const totalFancyPl = data && data?.length > 0 && data?.reduce((acc, obj) => acc + (+obj?.fancyEntryResult?.amount || 0), 0);
  const totalMcFc = data && data?.length > 0 && data?.reduce((acc, obj) => acc + (+obj?.clientComission || 0), 0);
  const totalRc = data && data?.length > 0 && data?.reduce((acc, obj) => acc + (+obj?.clientFancyComission || 0), 0);
  const totalMFRC = data && data?.length > 0 && data?.reduce((acc, obj) => acc + (+obj?.clientComission + +obj?.clientFancyComission || 0), 0);
  const totalCShare = data && data?.length > 0 && data?.reduce((acc, obj) => acc + (+obj?.clientShare || 0), 0);
  const totalCNet = data && data?.length > 0 && data?.reduce((acc, obj) => acc + (+obj?.clientNet || 0), 0);


  return (
    <div className="d-flex flex-column">
      <table className="w-100 match-position-table small-font">
        <thead>
          <tr className="text-center">
            <th>Name</th>
            <th>Match P/L</th>
            <th>Fancy P/L</th>
            <th>Match Com/Fancy Comm</th>
            <th>Rolling Comm</th>
            <th>M+F+C/RC</th>
            <th>C-Share</th>
            <th>C Net P/L</th>
          </tr>
        </thead>
        {CLIENTPL_DETAILS && CLIENTPL_DETAILS?.length > 0 && CLIENTPL_DETAILS.map((item, index) => (
          <tbody key={index}>
            <tr className="text-center">
              <td>{item.name}</td>
              <td className="clr-green">{item?.matchpl}</td>
              <td className="clr-green">{item?.fancyPl}</td>
              <td className="clr-green"> {item?.mcFc}</td>
              <td className="clr-green"> {item?.rfc}</td>
              <td className="clr-green"> {item?.totalCommission}</td>
              <td className="clr-green"> {item?.cShare}</td>
              <td className="clr-green" onClick={() => handleClientData(item?.reportDetails)}>
                {item?.cNet}
                <GiClick className="custom-click-icon ms-1 mt-2" />
              </td>
            </tr>
          </tbody>
        ))}
        <tfoot>
          <tr className="text-center small-font clr-green all-none">
            <th>TOTAL</th>
            <th>{totalMatchPl ? totalMatchPl?.toFixed(2) : 0}</th>
            <th>{totalFancyPl ? totalFancyPl?.toFixed(2) : 0}</th>
            <th>{totalMcFc ? totalMcFc?.toFixed(2) : 0}</th>
            <th>{totalRc ? totalRc?.toFixed(2) : 0}</th>
            <th>{totalMFRC ? totalMFRC?.toFixed(2) : 0}</th>
            <th>{totalCShare ? totalCShare?.toFixed(2) : 0}</th>
            <th>{totalCNet ? totalCNet?.toFixed(2) : 0}</th>
          </tr>
        </tfoot>
      </table>
      <table className="w-100 match-position-table small-font mt-2">
        <thead>
          <tr className="text-center">
            <th>Referal M+F+C/RC</th>
            <th>After Referral</th>
            <th>UL Share</th>
            <th>UL Comm</th>
            <th>Yours Net P/L</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>10,000</td>
            <td>90,000</td>
            <td>9000</td>
            <td>0.00</td>
            <td>81000</td>
          </tr>
        </tbody>
      </table>
      {showClientPL && <ClientPLData />}
    </div>
  );
}

export default ClientPLTable;
