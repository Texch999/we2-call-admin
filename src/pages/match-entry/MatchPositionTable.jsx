import { PiArrowCircleDownBold } from "react-icons/pi";
function MatchPositionTable(props) {
  const { teamName } = props;
  const MATCH_POSITION_TABLE_DATA = [
    {
      clientName: "Animesh",
      grossPL: 50000000,
      cPosition: 50000000,
      rfPosition: 50000000,
      ursPosition: 50000000,
    },
    {
      clientName: "Animesh",
      grossPL: 50000000,
      cPosition: 50000000,
      rfPosition: 50000000,
      ursPosition: 50000000,
    },
    {
      clientName: "Animesh",
      grossPL: 50000000,
      cPosition: 50000000,
      rfPosition: 50000000,
      ursPosition: 50000000,
    },
    {
      clientName: "Animesh",
      grossPL: 50000000,
      cPosition: 50000000,
      rfPosition: 50000000,
      ursPosition: 50000000,
    },
    {
      clientName: "Animesh",
      grossPL: 50000000,
      cPosition: 50000000,
      rfPosition: 50000000,
      ursPosition: 50000000,
    },
  ];
  return (
    <div className="w-50 p-3">
      <div className="row d-flex align-items-center match-position-bg p-2 rounded m-1">
        <div className="col-sm-4 col-lg-6">
          <div className="medium-font">
            Match Position - <span className="yellow-clr">{teamName}</span>
          </div>
        </div>
        <div className="col">
          <div className="share-bg rounded-pill d-flex align-items-center justify-content-between p-1">
            <div className="medium-font">Share</div>
            <div>
              <PiArrowCircleDownBold className="d-flex large-font" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="share-bg rounded-pill d-flex align-items-center justify-content-between p-1">
            <div className="medium-font">Comm</div>
            <div>
              <PiArrowCircleDownBold className="d-flex large-font" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <table className="w-100 match-position-table text-center medium-font">
          <thead>
            <tr>
              <th>CLIENT NAME</th>
              <th>GROSS P/L</th>
              <th>C POSITION</th>
              <th>RF POSITION</th>
              <th>URS POSITION</th>
            </tr>
          </thead>
          <tbody>
            {MATCH_POSITION_TABLE_DATA?.map((item, index) => (
              <tr key={index}>
                <td>{item.clientName}</td>
                <td>{item.grossPL}</td>
                <td>{item.cPosition}</td>
                <td>{item.rfPosition}</td>
                <td>{item.ursPosition}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>TOTAL</th>
              <th>50000000.00</th>
              <th>50000000.00</th>
              <th>50000000.00</th>
              <th>50000000.00</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default MatchPositionTable;
