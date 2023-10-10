import React from "react";

function FancyFirstInnings() {
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
    {
      Sno: "4",
      over: "6",
      team: "IND",
      runs: "100",
      name: "Animesh",
      yorn: "N",
      date: "31/07/23",
      time: "18:44:00PM",
      result: "102",
      amount: "500000.00",
      pl: "500000.00",
    },
    {
      Sno: "3",
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
    {
      Sno: "2",
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
    {
      Sno: "1",
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
            <th>S No</th>
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
        {Fancy_First_DETAILS.map((item, index) => (
          <tbody key={index}>
            <tr className="text-center">
              <td>{item.Sno}</td>
              <td>{item.over}</td>
              <td>{item.team}</td>
              <td> {item.runs}</td>
              <td> {item.name}</td>
              <td> {item.yorn}</td>
              <td> {item.date}</td>
              <td> {item.time}</td>
              <td className="clr-green"> {item.result}</td>
              <td> {item.amount}</td>
              <td className="clr-green"> {item.pl}</td>
            </tr>
          </tbody>
        ))}
        <tfoot>
          {/* <tr className="text-center small-font clr-green all-none w-100">
            <div className="w-100 d-flex justify-content-between">
              <div>6 Over-50000</div>
              <div>6 Over-50000</div>
              <div>6 Over-50000</div>
              <div>6 Over-50000</div>
            </div>
            <th className="text-end">TOTAL</th>
            <th>50000000.00</th>
          </tr> */}
        </tfoot>
      </table>
      <div className="harizental-scroll">
        <div>
          <div className="fancy-overs">6 Over-50000</div>
          <div className="fancy-overs">6 Over-50000</div>
          <div className="fancy-overs">6 Over-50000</div>
          <div className="fancy-overs">6 Over-50000</div>
          <div className="fancy-overs">6 Over-50000</div>
          <div className="fancy-overs">6 Over-50000</div>
        </div>
      </div>
    </div>
  );
}

export default FancyFirstInnings;
