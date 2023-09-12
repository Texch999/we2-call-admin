import { FaAngleLeft, FaAngleRight, FaTrophy } from "react-icons/fa6";
import { useState } from "react";
import { useHistory } from "react-router";

function MatchScroll() {
  const history = useHistory();
  const [matchEntry, setMatchEntry] = useState(true);
  const [fancyEntry, setFancyEntry] = useState(false);
  const [activeIndex, setActiveIndex] = useState("");
  const handleActiveIndex = (index) => {
    setActiveIndex(index);
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
    navigate("/fancy-entry");
    setMatchEntry(false);
    setFancyEntry(true);
  };
  const [scrollPosition, setScrollPosition] = useState(0);
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
  const MatchDetailsButtons = [
    {
      matchName: "IND vs PAK",
    },
    {
      matchName: "NZ vs SA",
    },
    {
      matchName: "AUS vs ENG",
    },
    {
      matchName: "IND vs PAK",
    },
    {
      matchName: "IND vs PAK",
    },
    {
      matchName: "NZ vs SA",
    },
    {
      matchName: "AUS vs ENG",
    },
    {
      matchName: "IND vs PAK",
    },
    {
      matchName: "IND vs PAK",
    },
    {
      matchName: "NZ vs SA",
    },
    {
      matchName: "AUS vs ENG",
    },
    {
      matchName: "IND vs PAK",
    },
  ];
  return (
    <div>
      <div className="container-fluid p-3">
        <div className="container-responsive d-flex align-items-center">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle arrow-icon p-1"
            onClick={scrollLeft}
          >
            <FaAngleLeft className="d-flex fs-5" />
          </div>
          <div
            className="w-100 d-flex align-items-center p-1"
            id="scroll-container-btn"
            style={{ overflowX: "scroll", whiteSpace: "nowrap" }}
          >
            {MatchDetailsButtons?.map((item, index) => (
              <div
                key={index}
                className={`btn-bg d-flex align-items-center justify-content-evenly p-2 m-1 rounded ${
                  activeIndex ? "yellow-border" : ""
                }`}
                onClick={() => handleActiveIndex(index)}
              >
                <span className="d-flex m-1">
                  <FaTrophy className="fs-5 yellow-clr" />
                </span>
                <div className="text-xl medium-font text-white m-1">
                  {item.matchName}
                </div>
              </div>
            ))}
          </div>
          <div
            className="d-flex align-items-center justify-content-center rounded-circle arrow-icon p-1"
            onClick={scrollRight}
          >
            <FaAngleRight className="d-flex fs-5" />
          </div>
        </div>
        <div className="w-100 container-fluid mt-4">
          <div className="w-100 row">
            <div className="col-4">
              <div className="row">
                <div className="col">
                  <div
                    className={`fw-semibold btn-bg medium-font text-white text-center p-3 m-1 rounded ${
                      matchEntry ? "yellow-btn" : ""
                    }`}
                    onClick={() => handleMatchEntry()}
                  >
                    Match Entry
                  </div>
                </div>
                <div className="col">
                  <div
                    className={`fw-semibold btn-bg medium-font text-white text-center p-3 m-1 rounded ${
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
              <div className="match-details-width d-flex align-items-center justify-content-between">
                <div className="text-center small-font text-white p-1 px-3 match-bg rounded-pill w-fit-content">
                  Date : 31/07/2023
                </div>
                <div className="text-center small-font text-white p-1 px-3 match-bg rounded-pill w-fit-content">
                  Time : 11:58:00 AM
                </div>
                <div className="text-center small-font text-white p-1 px-3 match-bg rounded-pill w-fit-content">
                  Team : IND vs PAK
                </div>
                <div className="text-center small-font text-white p-1 px-3 match-bg rounded-pill w-fit-content">
                  Series : T20 WC
                </div>
                <div className="text-center small-font text-white p-1 px-3 match-bg rounded-pill w-fit-content">
                  Gender : Male
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
