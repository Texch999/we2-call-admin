import { useState } from "react";
import { FaTrophy } from "react-icons/fa";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Col, Row } from "antd";

function MatchHeader() {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [matchEntry, SetMatchEntry] = useState(true);
  const [fancyEntry, setFancyEntry] = useState(false);
  const handleShowMatchEntry = () => {
    SetMatchEntry(true);
    setFancyEntry(false);
    navigate("/matchentry");
  };
  const handleShowFancyEntry = () => {
    setFancyEntry(true);
    SetMatchEntry(false);
    navigate("/fancyentry");
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
      <div className="match-header-padding">
        <div className="align-center">
          <div className="flex-center arrow-icon" onClick={scrollLeft}>
            <BiSolidChevronLeft />
          </div>
          <div
            className="align-center scroll-container-btn"
            id="scroll-container-btn"
            style={{ overflowX: "scroll", whiteSpace: "nowrap" }}
          >
            {MatchDetailsButtons?.map((value, index) => (
              <div key={index} className="flex-center match-div font-14">
                <div className="flex-center trophy-icon">
                  <FaTrophy />
                </div>
                <div>{value.matchName}</div>
              </div>
            ))}
          </div>
          <div className="flex-center arrow-icon" onClick={scrollRight}>
            <BiSolidChevronRight />
          </div>
        </div>
        <div className="mt-20 flex-space-between">
          <div className="w-30 flex-space-between">
            <div
              className={`${
                matchEntry ? "hilight-button font-14" : "normal-button font-14"
              }`}
              onClick={() => handleShowMatchEntry()}
            >
              Match Entry
            </div>
            <div
              className={`${
                fancyEntry ? "hilight-button font-14" : "normal-button font-14"
              }`}
              onClick={() => handleShowFancyEntry()}
            >
              Fancy Entry
            </div>
          </div>
          <div className="w-60">
            <Row gutter={[24, 24]}>
              <Col span={5}>
                <div className="fw-600 font-12 series-details flex-center">
                  Date : <span>31/07/2023</span>
                </div>
              </Col>
              <Col span={5}>
                <div className="fw-600 font-12 series-details flex-center">
                  Time : <span>11:58:00 AM</span>
                </div>
              </Col>
              <Col span={5}>
                <div className="fw-600 font-12 series-details flex-center">
                  Team : <span>IND vs SL</span>
                </div>
              </Col>
              <Col span={5}>
                <div className="fw-600 font-12 series-details flex-center">
                  Series : <span>T20</span>
                </div>
              </Col>
              <Col span={4}>
                <div className="fw-600 font-12 series-details flex-center">
                  Gender : <span>Male</span>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <hr className="hr-line" />
    </div>
  );
}

export default MatchHeader;
