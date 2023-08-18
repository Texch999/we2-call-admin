import { useState } from "react";
import { Row, Col } from "bootstrap";
import { FaAngleLeft, FaAngleRight, FaTrophy } from "react-icons/fa6";

function MatchScroll() {
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
              <div className="btn-bg d-flex align-items-center justify-content-evenly p-2 m-1 rounded">
                <span className="d-flex m-1">
                  <FaTrophy className="fs-4 trophy-icon" />
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
                  <div className="btn-bg medium-font text-white text-center p-3 m-1 rounded">
                    Match Entry
                  </div>
                </div>
                <div className="col">
                  <div className="btn-bg medium-font text-white text-center p-3 m-1 rounded">
                    Fancy Entry
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8 d-flex align-items-center justify-content-end">
              <div className="row d-flex align-items-center w-85">
                <div className="col">
                  <div className="text-center small-font text-white p-2 match-details-text">
                    Date : 31/07/2023
                  </div>
                </div>
                <div className="col">
                  <div className="text-center small-font text-white p-2 match-details-text">
                    Time : 11:58:00 AM
                  </div>
                </div>
                <div className="col">
                  <div className="text-center small-font text-white p-2 match-details-text">
                    Team : IND vs SL
                  </div>
                </div>
                <div className="col">
                  <div className="text-center small-font text-white p-2 match-details-text">
                    Series : T20 WC
                  </div>
                </div>
                <div className="col">
                  <div className="text-center small-font text-white p-2 match-details-text">
                    Gender : Male
                  </div>
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
