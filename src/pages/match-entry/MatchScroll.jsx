import { FaAngleLeft, FaAngleRight, FaTrophy } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { GET_ALL_MATCHES } from "../../config/endpoints";
import { call } from "../../config/axios";

function MatchScroll() {
  let register_id = localStorage?.getItem("register_id");
  let creator_id = localStorage?.getItem("creator_id");
  let account_role = localStorage?.getItem("account_role");
  const [matchesData, setMatchesData] = useState([]);
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
    setFancyEntry(true);
    setMatchEntry(false);
    navigate("/fancy-entry");
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

  const getMatchesData = async () => {
    await call(GET_ALL_MATCHES, { register_id, account_role })
      .then((res) => {
        let result = res?.data?.data;
        console.log(result);
        setMatchesData(result.liveMatches);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMatchesData();
  }, []);
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
            {matchesData?.map((item, index) => (
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
                  {item?.match_name}
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
              <div className="w-80 d-flex align-items-center justify-content-between">
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
