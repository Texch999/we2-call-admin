import React from "react";

function ScheduleMatchesTable(props) {
  const { data, columns, tableClassname, editButtons } = props;
  return (
    <table
      className={`w-100 match-position-table text-center medium-font ${tableClassname}`}
    >
      <thead id="home-table-head">
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>
                <div
                  className={
                    item[column.field] === "Join"
                      ? "td-class"
                      : item[column.field] === "Not-Started"
                      ? "not-class"
                      : ""
                  }
                >
                  {colIndex === 0 ? (
                    <div>
                      <div>
                        {item.sport_name},{item.gender}
                      </div>
                      <div>
                        {item.game_object.match_type},{item.stadium}
                      </div>
                      <div className="clr-yellow">
                        {item.date},{item.time}
                      </div>
                    </div>
                  ) : (
                    item[column.field]
                  )}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ScheduleMatchesTable;
