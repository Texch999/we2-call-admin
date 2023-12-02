function MatchBetTable({ userMatchEntrys, winTeam }) {
  const totalPL =
    userMatchEntrys &&
    userMatchEntrys?.length > 0 &&
    userMatchEntrys.reduce(
      (acc, obj) => acc + (+obj?.teamObj[winTeam] || 0),
      0
    );
  return (
    <div>
      <table className="w-100 match-position-table medium-font">
        <thead>
          <tr className="text-center">
            <th>S No</th>
            <th>Rate</th>
            <th>Team</th>
            <th>Name</th>
            <th>P/E</th>
            <th>Date</th>
            <th>Time</th>
            <th>Win Team</th>
            <th>Amount</th>
            <th>P/L</th>
          </tr>
        </thead>
        {userMatchEntrys &&
          userMatchEntrys?.length > 0 &&
          userMatchEntrys?.map((item, index) => (
            <tbody key={index}>
              <tr className="text-center">
                <td>{`${item?.s_no}/${item?.old_s_no}`}</td>
                <td>{item.rate}</td>
                <td>{item.team}</td>
                <td>{item.client_name}</td>
                <td>{item.pe}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.team}</td>
                <td className={`${item?.amount > 0 ? "clr-green" : "clr-red"}`}>
                  {item.amount}
                </td>
                <td
                  className={`${
                    item?.teamObj[winTeam] > 0 ? "clr-green" : "clr-red"
                  }`}
                >
                  {item?.teamObj[winTeam]}
                </td>
              </tr>
            </tbody>
          ))}
        <tfoot>
          <tr className="text-center clr-green">
            <th colSpan={9} className="text-end">
              TOTAL
            </th>
            <th
              className={`${totalPL > 0 ? "clr-green" : "clr-red"}`}
              colSpan={1}
            >
              {totalPL}
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default MatchBetTable;
