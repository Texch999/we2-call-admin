import { Table } from "react-bootstrap";

function AdminsTableMatchWise(props) {
  const { data, columns, totalPosition } = props;
  const calculateColumnSum = (data, field) => {
    return data && data?.length > 0 && data.reduce((sum, item) => sum + item[field], 0);
  };
  const columnKeys = columns.map((column) => column.field);
  return (
    <Table responsive="md" className="call-management-data">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} className="text-center">
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data && data?.length > 0  && data?.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>
                <div
                  className={`text-center ${
                    isNaN(item[column.field]) > 0
                      ? ""
                      : +item[column.field] > 0
                      ? "clr-green"
                      : "clr-red"
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
              field !== "header" && data && data?.length > 0 && data?.every((item) => !isNaN(item[field]));
            const sum = calculateColumnSum(data, field);
            return (
              <th
                key={field}
                className={`text-center ${
                  totalPosition === field
                    ? "text-white"
                    : isNumericColumn && sum >= 0
                    ? "clr-green"
                    : "clr-red"
                }`}
              >
                {totalPosition === field ? "TOTAL" : isNumericColumn ? sum : ""}
              </th>
            );
          })}
        </tr>
      </tfoot>
    </Table>
  );
}

export default AdminsTableMatchWise;
