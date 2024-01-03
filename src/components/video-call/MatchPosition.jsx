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
  const [data, setData] = useState([]);
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
        setData(res?.data?.data?.Items);
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

  useEffect(() => {
    if (matchRegisterData?.registered_match_id) {
      getMatchEntryDetails();
    }
  }, [matchRegisterData?.registered_match_id]);

  useEffect(() => {
    getMatchInfo();
  }, []);

  useEffect(() => {
    if (matchRegisterData?.registered_match_id) {
      getMatchPositionData();
      getFancyEntryDetails();
      getFancyProfitLoss();
    }
  }, [matchRegisterData?.registered_match_id]);

  return (
    <div className="w-25 header-bg h-80vh rounded p-1 font-14">
      <div className="num-btn-bg rounded p-2">
        <div className="font-14 mt-2">
          <div className="rounded-pill py-1 px-3 bg-blue">
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
      <div className="num-btn-bg rounded p-2 mt-1">
        <div>{userName} - Match Position</div>
      </div>
      <div className="num-btn-bg rounded mt-1">
        <div className="d-flex align-items-center justify-content-between p-1">
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
        <div className="w-100 d-flex p-1">
          <div className="col">S.NO</div>
          <div className="col">TEAM</div>
          <div className="col">P/E</div>
          <div className="col">AMOUNT</div>
        </div>
        <hr className="sb-line" />
        <div className="user-list-height">
          {matchPositionData?.length > 0 &&
            matchPositionData?.map((item, index) => (
              <>
                <div className="w-100 d-flex p-1" key={index}>
                  <div className="col">{index + 1}</div>
                  <div className="col">{item?.team}</div>
                  <div className="col">{item?.pe}</div>
                  <div className="col">{item?.amount}</div>
                </div>
                <hr className="sb-line" />
              </>
            ))}
        </div>
      </div>
      <div className="num-btn-bg rounded p-2 mt-1">
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
        <div className="w-100 d-flex p-1">
          <div className="col">OVER</div>
          <div className="col">TEAM</div>
          <div className="col">RUNS</div>
          <div className="col">Y/N</div>
          <div className="col">AMOUNT</div>
        </div>
        <hr className="sb-line" />
        <div className="user-list-height">
          {userFancyEntrys?.length > 0 &&
            userFancyEntrys?.map((item, index) => (
              <>
                <div className="w-100 d-flex p-1" key={index}>
                  <div className="col">{item?.over}</div>
                  <div className="col">{item?.team}</div>
                  <div className="col">{item?.runs}</div>
                  <div className="col">{item?.yN}</div>
                  <div className="col">{item?.amount}</div>
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
