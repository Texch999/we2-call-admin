import { FaAngleLeft, FaAngleRight, FaTrophy } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedLiveMatch } from "../../redux/actions/commonActions";

function MatchScroll(props) {
  const { allMatches, selectedMatch, setSelectedMatch } = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [matchEntry, setMatchEntry] = useState(true);
  const [fancyEntry, setFancyEntry] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const selectedLiveMatch = useSelector(
    (state) => state?.common?.selected_match
  );

  useEffect(() => {
    if (history.location.pathname === "/fancy-entry") {
      setFancyEntry(true);
      setMatchEntry(false);
    }
  }, []);

  const handleActiveIndex = (index, item) => {
    setActiveIndex(index);
    setSelectedMatch(item);
    dispatch(setSelectedLiveMatch(item));
  };
  const navigate = (path) => {
    history.push(path);
  };
  const handleMatchEntry = () => {
    setMatchEntry(true);
    setFancyEntry(false);
    navigate("/match-entry");
  };
  const handleFancyEntry = () => {
    setFancyEntry(true);
    setMatchEntry(false);
    navigate("/fancy-entry");
  };
  const scrollLeft = () => {
    const container = document.getElementById("scroll-container-btn");
    container.scrollTo({
      left: scrollPosition - 100,
      behavior: "smooth",
    });
    setScrollPosition(scrollPosition - 100);
  };
  const scrollRight = () => {
    const container = document.getElementById("scroll-container-btn");
    container.scrollTo({
      left: scrollPosition + 100,
      behavior: "smooth",
    });
    setScrollPosition(scrollPosition + 100);
  };
  return (
    <div>
      <div className="container-fluid px-3 pb-3">
        <div className="container-responsive d-flex align-items-center">
          <div
            className="cursor-pointer d-flex align-items-center justify-content-center rounded-circle arrow-icon p-1"
            onClick={scrollLeft}
          >
            <FaAngleLeft className="d-flex fs-5" />
          </div>
          <div
            className="w-100 d-flex align-items-center p-1"
            id="scroll-container-btn"
            style={{ overflowX: "scroll", whiteSpace: "nowrap" }}
          >
            {allMatches?.map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer btn-bg d-flex align-items-center justify-content-evenly p-2 m-1 rounded cursor-pointer ${
                  activeIndex === index ? "yellow-border" : ""
                }`}
                onClick={() => handleActiveIndex(index, item)}
              >
                <span className="d-flex m-1">
                  <FaTrophy className="fs-5 yellow-clr" />
                </span>
                <div className="text-xl medium-font text-white m-1">
                  {item?.match_name}
                </div>
              </div>
            ))}
          </div>
          <div
            className="cursor-pointer d-flex align-items-center justify-content-center rounded-circle arrow-icon p-1"
            onClick={scrollRight}
          >
            <FaAngleRight className="d-flex fs-5" />
          </div>
        </div>
        <div className="w-100 container-fluid mt-2">
          <div className="w-100 row">
            <div className="col-4">
              <div className="row">
                <div className="col">
                  <div
                    className={`cursor-pointer fw-semibold btn-bg medium-font text-white text-center p-3 m-1 rounded ${
                      matchEntry ? "yellow-btn" : ""
                    }`}
                    onClick={() => handleMatchEntry()}
                  >
                    Match Entry
                  </div>
                </div>
                <div className="col">
                  <div
                    className={`cursor-pointer fw-semibold btn-bg medium-font text-white text-center p-3 m-1 rounded ${
                      fancyEntry ? "yellow-btn" : ""
                    }`}
                    onClick={() => handleFancyEntry()}
                  >
                    Fancy Entry
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8 d-flex align-items-center justify-content-end">
              <div className="w-80 d-flex align-items-center justify-content-between">
                <div className="text-center small-font text-white p-1 px-3 match-bg rounded-pill w-fit-content">
                  Date : {selectedMatch?.date || "Date"}
                </div>
                <div className="text-center small-font text-white p-1 px-3 match-bg rounded-pill w-fit-content">
                  Time : {selectedMatch?.time || "Time"}
                </div>
                <div className="text-center small-font text-white p-1 px-3 match-bg rounded-pill w-fit-content">
                  Team : {selectedMatch?.match_name || "Match"}
                </div>
                <div className="text-center small-font text-white p-1 px-3 match-bg rounded-pill w-fit-content">
                  Series : {selectedMatch?.series_name || "Series Name"}
                </div>
                <div className="text-center small-font text-white p-1 px-3 match-bg rounded-pill w-fit-content">
                  Gender : {selectedMatch?.gender || "Gender"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="hr-line" />
    </div>
  );
}

export default MatchScroll;
