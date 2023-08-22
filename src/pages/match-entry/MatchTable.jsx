function MatchTable(props) {
  const { data, columns } = props;
  const calculateColumnSum = (data, field) => {
    return data.reduce((sum, item) => sum + item[field], 0);
  };
  const columnKeys = columns.map((column) => column.field);
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
              <td key={colIndex}>
                <div
                  className={`${
                    isNaN(item[column.field]) > 0
                      ? ""
                      : +item[column.field] > 0
                      ? "green-color"
                      : "red-color"
                  }`}
                >
                  {item[column.field]}
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          {columnKeys.map((field) => (
            <th
              key={field}
              className={`${
                isNaN(calculateColumnSum(data, field)) > 0
                  ? ""
                  : +calculateColumnSum(data, field) > 0
                  ? "green-color"
                  : "red-color"
              }`}
            >
              {field === "header" ? "TOTAL" : calculateColumnSum(data, field)}
            </th>
          ))}
        </tr>
      </tfoot>
    </table>
  );
}

export default MatchTable;
