import { FaTrophy } from "react-icons/fa6";

function MatchScroll() {
  return (
    <div>
      <div className="border-clr">
        <div className="d-flex align-items-center">
          <div className="col-md-3  p-3">
            <div className="btn-bg d-flex align-items-center justify-content-evenly p-3 rounded">
              <span className="d-flex text-white">
                <FaTrophy className="trophy-icon" />
              </span>
              <div className="text-white text-lg">IND vs PAK</div>
            </div>
          </div>
          <div className="col-md-3 p-3">
            <div className="btn-bg d-flex align-items-center justify-content-evenly p-3 rounded">
              <span className="d-flex">
                <FaTrophy className="trophy-icon" />
              </span>
              <div className="text-white">IND vs PAK</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchScroll;
