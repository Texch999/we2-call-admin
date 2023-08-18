import { PiArrowCircleDownBold } from "react-icons/pi";
function MatchPositionTable() {
  return (
    <div className="p-3 w-50">
      <div className="row d-flex align-items-center match-position-header p-2 rounded">
        <div className="col-7">
          <div>
            Match Position - <span className="yellow-clr">IND</span>
          </div>
        </div>
        <div className="col">
          <div className="share-text-div d-flex align-items-center justify-content-between p-1">
            <div>Share</div>
            <div>
              <PiArrowCircleDownBold className="large-font" />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="share-text-div d-flex align-items-center justify-content-between p-1">
            <div>Comm</div>
            <div>
              <PiArrowCircleDownBold className="large-font" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <table className="w-100 match-position-table">
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
            <tr>
              <td>Animesh</td>
              <td>50000000.00</td>
              <td>50000000.00</td>
              <td>50000000.00</td>
              <td>50000000.00</td>
            </tr>
            <tr>
              <td>Animesh</td>
              <td>50000000.00</td>
              <td>50000000.00</td>
              <td>50000000.00</td>
              <td>50000000.00</td>
            </tr>
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
