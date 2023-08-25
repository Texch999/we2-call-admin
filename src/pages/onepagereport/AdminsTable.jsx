import { Table } from "react-bootstrap";

function AdminsTable(props) {
  const { data, columns } = props;
  const calculateColumnSum = (data, field) => {
    return data.reduce((sum, item) => sum + item[field], 0);
  };
  const columnKeys = columns.map((column) => column.field);
  return (
    <Table responsive="md" className="call-management-data">
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
          {columnKeys.map((field) => {
            const isNumericColumn =
              field !== "header" && data.every((item) => !isNaN(item[field]));
            const sum = calculateColumnSum(data, field);

            return (
              <th
                key={field}
                className={`${
                  isNumericColumn && sum >= 0 ? "green-color" : "red-color"
                }`}
              >
                {isNumericColumn ? sum : ""}
              </th>
            );
          })}
        </tr>
      </tfoot>
    </Table>
  );
}

export default AdminsTable;
