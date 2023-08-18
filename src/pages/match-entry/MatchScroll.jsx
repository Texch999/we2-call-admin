import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTrophy } from "react-icons/fa6";

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
    <div className="d-flex align-items-center w-100">
      <div
        className="d-flex align-items-center justify-content-center arrow-icon"
        onClick={scrollLeft}
      >
        <FaChevronLeft className="d-flex" />
      </div>
      <div
        className="d-flex align-items-center p-2"
        id="scroll-container-btn"
        style={{ overflowX: "scroll", whiteSpace: "nowrap" }}
      >
        {MatchDetailsButtons?.map((item, index) => (
          <div className="btn-bg d-flex align-items-center justify-content-evenly p-2 m-1 rounded">
            <span className="d-flex m-2">
              <FaTrophy className="fs-4 trophy-icon" />
            </span>
            <div className="fs-5 text-white m-2">{item.matchName}</div>
          </div>
        ))}
      </div>
      <div
        className="d-flex align-items-center justify-content-center arrow-icon"
        onClick={scrollRight}
      >
        <FaChevronRight className="d-flex" />
      </div>
    </div>
  );
}

export default MatchScroll;
