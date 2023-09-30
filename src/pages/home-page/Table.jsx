function Table(props) {
  const { data, columns, tableClassname, editButtons } = props;
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

          <tbody>
            {data?.length > 0 ? (
              data?.map((item, rowIndex) => (
                <tr key={rowIndex}>
                  {columns?.map((column, colIndex) => (
                    <td key={colIndex}>
                      <div>{item[column?.field]}</div>
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr className="no-data-found">
                <div>NO DATA</div>
              </tr>
            )}
          </tbody>
        </table>
      </>
    );
  }
  return (
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
      <tbody>
        {!data?.length ? (
          <tr className="no-data-found">
            <div>No Data Found</div>
          </tr>
        ) : (
          data.map((item, rowIndex) => (
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
                    {column.header === "ACTION"
                      ? editButtons
                      : item[column.field]}
                  </div>
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default Table;
