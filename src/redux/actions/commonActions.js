import * as actionTypes from "./actionConstants";

export const setLoading = (data) => {
  return {
    type: actionTypes.SET_LOADING,
    data,
  };
};

export const setRegisterUserInfo = (data) => {
  return {
    type: actionTypes.SET_REGISTER_USER_INFO,
    data,
  };
};
export const setSelectedPackages = (data) => {
  return {
    type: actionTypes.SELECTED_PACKAGES,
    data,
  };
};

export const setSelectedLiveMatch = (data) => {
  return {
    type: actionTypes.SET_SELECTED_MATCH,
    data,
  };
};