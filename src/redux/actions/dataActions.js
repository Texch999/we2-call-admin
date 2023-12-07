import * as actionTypes from "./actionConstants";

export const setLoginModal = (data) => {
  return {
    type: actionTypes.SET_LOGIN_MODAL,
    data,
  };
};

export const setMeetingStartStatus = (data) => {
  return {
    type: actionTypes.SET_MEETING_IS_STARTED,
    payload: data,
  };
};
export const setMinimize = (data) => {
  return {
    type: actionTypes.SET_MINIMIZE,
    payload: data,
  };
};