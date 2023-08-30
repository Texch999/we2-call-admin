import React from "react";

function Table(props) {
  const { data, columns, tableClassname } = props;
  return (
    <table
      className={`w-100 match-position-table text-center medium-font ${tableClassname}`}
    >
      <thead id="home-table-head">
        <tr>
          {columns.map((column, index) => (
            <th key={index} >
              {column.header}
            </th>
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
                  {item[column.field]}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
