import { GET_FANCY_ENTRY_DATA } from "../../config/endpoints";
import { call } from "../../config/axios";
import { useEffect, useState } from "react";

function FancyFirstInnings({ winTeam, matchDetails, selectedClientID }) {
  const register_id = localStorage?.getItem("register_id");
  const [userFancyFirstInnings, setUserFancyFirstInnings] = useState([]);

  const getFirstInningsFancyEntryDetails = async () => {
    await call(GET_FANCY_ENTRY_DATA, {
      register_id,
      client_id: selectedClientID,
      registered_match_id: matchDetails?.matchId,
    })
      .then((res) => {
        let result = res?.data?.data?.Items;
        setUserFancyFirstInnings(
          result?.filter((i) => i?.innings === "1" || i?.innings === 1)
        );
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getFirstInningsFancyEntryDetails();
  }, [selectedClientID]);

  const totalPL =
    userFancyFirstInnings &&
    userFancyFirstInnings?.length > 0 &&
    userFancyFirstInnings.reduce(
      (acc, obj) =>
        acc + ((obj?.fancy_status === "Y" ? -+obj?.amount : +obj?.amount) || 0),
      0
    );

  // console.log(userFancyFirstInnings, "userFancyFirstInnings");

  const Fancy_First_DETAILS = [
    {
      Sno: "5",
      over: "6",
      team: "IND",
      runs: "100",
      name: "Animesh",
      yorn: "Y",
      date: "31/07/23",
      time: "18:44:00PM",
      result: "102",
      amount: "500000.00",
      pl: "500000.00",
    },
  ];

  return (
    <div>
      <table className="w-100 match-position-table small-font">
        <thead>
          <tr className="text-center">
            <th>S.No</th>
            <th>Over</th>
            <th>Team</th>
            <th>Runs</th>
            <th>Name</th>
            <th>YorN</th>
            <th>Date</th>
            <th>Time</th>
            <th>Result</th>
            <th>Amount</th>
            <th>P/L</th>
          </tr>
        </thead>
        {userFancyFirstInnings &&
          userFancyFirstInnings?.length > 0 &&
          userFancyFirstInnings?.map((item, index) => (
            <tbody key={index}>
              <tr className="text-center">
                <td>{item.s_no}</td>
                <td>{item.over}</td>
                <td>{item.team}</td>
                <td>{item.runs}</td>
                <td>{item.name}</td>
                <td>{item.yN}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td className="clr-green"> {item.scored_runs}</td>
                <td>{item.amount}</td>
                <td className="clr-green">
                  {item?.fancy_status === "Y" ? -item?.amount : item?.amount}
                </td>
              </tr>
            </tbody>
          ))}
      </table>
      <div className="w-100 d-flex justify-content-between mt-2">
        <div className="harizental-scroll">
          <div>
            <div className="fancy-overs">6 Over-50000</div>
            <div className="fancy-overs">10 Over-50000</div>
            <div className="fancy-overs">16 Over-50000</div>
            <div className="fancy-overs">20 Over-50000</div>
            <div className="fancy-overs">25 Over-50000</div>
            <div className="fancy-overs">30 Over-50000</div>
          </div>
        </div>
        <div className="w-25 d-flex justify-content-between me-2">
          <th className="text-end">TOTAL</th>
          <th>{totalPL}</th>
        </div>
      </div>
    </div>
  );
}

export default FancyFirstInnings;
