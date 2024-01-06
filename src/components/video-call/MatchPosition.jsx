import { useEffect, useState } from "react";
import { call } from "../../config/axios";
import {
  FANCY_RESULT_PROFIT_LOSS,
  GET_ACCOUNT_MATCHES_DATA,
  GET_FANCY_ENTRY_DATA,
  GET_MATCH_ENTRY_DETAILS,
  GET_MATCH_POSITION_DATA,
} from "../../config/endpoints";

function MatchPosition(props) {
  const { matchId, liveMeeting } = props;
  const userName = localStorage.getItem("user_name");
  const [userMatchEntrys, setUserMatchEntrys] = useState([]);
  const [matchPositionData, setMatchPositionData] = useState([]);
  const [userFancyEntrys, setUserFancyEntrys] = useState([]);
  const [profitLossData, setProfitLossData] = useState([]);
  const [matchRegisterData, setMatchRegisterData] = useState([]);

  const getMatchEntryDetails = async () => {
    await call(GET_MATCH_ENTRY_DETAILS, {
      registered_match_id: matchRegisterData?.registered_match_id,
      register_id: localStorage.getItem("creator_id"),
    })
      .then((res) => {
        setUserMatchEntrys(res?.data?.data?.Items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFancyEntryDetails = async () => {
    await call(GET_FANCY_ENTRY_DATA, {
      registered_match_id: matchRegisterData?.registered_match_id,
      register_id: localStorage.getItem("creator_id"),
    })
      .then((res) => {
        let results = res?.data?.data?.Items;
        setUserFancyEntrys(results);
        console.log(res.data.data.Items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFancyProfitLoss = async (ID) => {
    await call(FANCY_RESULT_PROFIT_LOSS, {
      register_id: localStorage.getItem("creator_id"),
      registered_match_id: matchRegisterData?.registered_match_id,
    })
      .then((res) => {
        setProfitLossData(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };
  const getMatchInfo = async () => {
    await call(GET_ACCOUNT_MATCHES_DATA, {
      register_id: localStorage.getItem("creator_id"),
      match_id: liveMeeting?.match_id,
    })
      .then(async (res) => {
        let temp =
          res?.data && res.data.data && res.data.data[0]
            ? res.data.data[0]
            : res.data.data;
        setMatchRegisterData(temp);
      })
      .catch((err) => console.log(err));
  };

  const getMatchPositionData = async () => {
    await call(GET_MATCH_POSITION_DATA, {
      registered_match_id: matchRegisterData?.registered_match_id,
      register_id: localStorage.getItem("creator_id"),
    })
      .then((res) => {
        setMatchPositionData(res?.data?.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMatchInfo();
  }, [liveMeeting]);

  useEffect(() => {
    getMatchEntryDetails();
    getMatchPositionData();
    getFancyEntryDetails();
    getFancyProfitLoss();
  }, [matchRegisterData]);

  return (
    <div className="w-25 header-bg h-80vh rounded p-1 font-14">
      <div className="num-btn-bg rounded p-2">
        <div className="font-14 d-flex flex-wrap">
          <div className="rounded-pill py-1 px-3 bg-blue mt-1">
            Date : {liveMeeting?.date}
          </div>
          <div className="rounded-pill py-1 px-3 bg-blue mt-1">
            {liveMeeting?.event_name}
          </div>
          <div className="rounded-pill py-1 px-3 bg-blue mt-1">
            {liveMeeting?.match_name}
          </div>
        </div>
      </div>
      <div className="fw-600 num-btn-bg rounded p-2 mt-1">
        <div>{userName} - Match Position</div>
      </div>
      <div className="num-btn-bg rounded mt-1">
        <div className="fw-600 d-flex align-items-center justify-content-around p-1">
          <div className="flex-column flex-center">
            <div>IND</div>
            <div>200000</div>
          </div>
          <div className="flex-column flex-center">
            <div>PAK</div>
            <div>200000</div>
          </div>
        </div>
        <hr className="sb-line" />
        <div className="w-100 fw-600 d-flex p-1">
          <div className="col flex-center">S.NO</div>
          <div className="col flex-center">TEAM</div>
          <div className="col flex-center">P/E</div>
          <div className="col flex-center">AMOUNT</div>
        </div>
        <hr className="sb-line" />
        <div className="user-list-height">
          {userMatchEntrys?.length > 0 &&
            userMatchEntrys
              ?.filter((item) => item?.client_name === userName)
              ?.map((item, index) => (
                <>
                  <div className="w-100 d-flex p-1" key={index}>
                    <div className="col flex-center">{index + 1}</div>
                    <div className="col flex-center">{item?.team}</div>
                    <div className="col flex-center">{item?.pe}</div>
                    <div className="col flex-center">{item?.amount}</div>
                  </div>
                  <hr className="sb-line" />
                </>
              ))}
        </div>
      </div>
      <div className="fw-600 num-btn-bg rounded p-2 mt-1">
        <div>
          Fancy PL -
          <span>
            {profitLossData?.clientsData?.[userName]?.totalLossOrProfit || 0}
          </span>
        </div>
      </div>
      <div className="num-btn-bg rounded mt-1">
        <div className="bg-yellow rounded fit-content px-2">1st Inn</div>
        <div className="w-100 d-flex p-1">
          <div className="col flex-column flex-center">
            <div>5 Over</div>
            <div>100000</div>
          </div>
          <div className="col flex-column flex-center">
            <div>10 Over</div>
            <div>150000</div>
          </div>
          <div className="col flex-column flex-center">
            <div>15 Over</div>
            <div>200000</div>
          </div>
          <div className="col flex-column flex-center">
            <div>20 Over</div>
            <div>250000</div>
          </div>
        </div>
        <hr className="sb-line" />
        <div className="w-100 fw-600 d-flex p-1">
          <div className="col flex-center">OVER</div>
          <div className="col flex-center">TEAM</div>
          <div className="col flex-center">RUNS</div>
          <div className="col flex-center">Y/N</div>
          <div className="col flex-center">AMOUNT</div>
        </div>
        <hr className="sb-line" />
        <div className="user-list-height">
          {userFancyEntrys?.length > 0 &&
            userFancyEntrys
              ?.filter((item) => item?.client_name === userName)
              ?.map((item, index) => (
                <>
                  <div className="w-100 d-flex p-1" key={index}>
                    <div className="col flex-center">{item?.over}</div>
                    <div className="col flex-center">{item?.team}</div>
                    <div className="col flex-center">{item?.runs}</div>
                    <div className="col flex-center">{item?.yN}</div>
                    <div className="col flex-center">{item?.amount}</div>
                  </div>
                  <hr className="sb-line" />
                </>
              ))}
        </div>
      </div>
    </div>
  );
}

export default MatchPosition;
