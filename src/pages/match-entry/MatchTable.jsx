function MatchTable(props) {
  const { data, columns } = props;
  const calculateColumnTotal = (data, key) => {
    return data.reduce((total, row) => total + row[key], 0);
  };
  return (
    <table className="w-100 match-position-table text-center medium-font">
      <thead>
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
              <td
                className={`${
                  column.field > 0 ? "red-color" : "green-color"
                }`}
                key={colIndex}
              >
                {item[column.field]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>
              {column.total ? calculateColumnTotal(data, column.key) : ""}
            </th>
          ))}
        </tr>
      </tfoot>
    </table>
  );
}

export default MatchTable;
