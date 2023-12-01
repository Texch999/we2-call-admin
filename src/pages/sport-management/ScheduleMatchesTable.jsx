import React from "react";

function ScheduleMatchesTable(props) {
  const { data, columns, tableClassname, editButtons } = props;
  return (
    <div>
      <thead
        id="home-table-head"
        className="w-100 d-flex justify-content-around p-2"
      >
        {columns.map((column, index) => (
          <th key={index}>{column.header}</th>
        ))}
      </thead>
      <div className="table-scedule-scroll">
        <table
          className={`w-100 match-position-table text-center medium-font ${tableClassname}`}
        >
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
      </div>
    </div>
  );
}

export default ScheduleMatchesTable;
