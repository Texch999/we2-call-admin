import moment from "moment";

function AlertsTable(props) {
  const { data, columns, tableClassname } = props;
  if (!data?.length) {
    return (
      <>
        <table
          className={`w-100 match-position-table text-center medium-font ${tableClassname}`}
        >
          <thead id="home-table-head">
            <tr>
              {columns?.map((column, index) => (
                <th key={index}>{column.header}</th>
              ))}
            </tr>
          </thead>
        </table>
        <tr className="no-data-found">
          <div>No Data Found</div>
        </tr>
      </>
    );
  }
  return (
    <div className="table-body-height">
      <table
        className={`fixed-table w-100 match-position-table text-center medium-font ${tableClassname}`}
      >
        <thead id="home-table-head">
          <tr>
            {columns?.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="w-100">
          {data?.length > 0 &&
            data?.map((item, rowIndex) => (
              <tr key={rowIndex}>
                {columns?.map((column, colIndex) => (
                  <td key={colIndex}>
                    {colIndex === 1 ? (
                      <div>
                        <div>
                          {item?.team}-
                          <span
                            className={
                              item.pe === "P"
                                ? "clr-green me-2"
                                : "clr-red me-2"
                            }
                          >
                            {item?.pe}
                          </span>
                          {Object.keys(item?.teamObj)[0]} vs
                          {Object.keys(item?.teamObj)[1]}
                        </div>
                        <div>
                          {item?.date}
                          <span className="ms-2">
                            {moment(item?.matchTimeStamp).format(
                              "DD-MM-YYYY, hh:mm:ss"
                            )}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={
                          item[column.field] === "updated"
                            ? "td-class"
                            : item[column.field] === "deleted"
                            ? "not-class"
                            : ""
                        }
                      >
                        {item[column?.field]}
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default AlertsTable;
