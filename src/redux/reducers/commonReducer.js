import * as actionTypes from "../actions/actionConstants";

const initialState = {
  loading: false,
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.data,
      };
      case actionTypes.SET_REGISTER_USER_INFO:
        return {
          ...state,
          register_user_info: action.data,
        };
        case actionTypes.SELECTED_PACKAGES:
        return {
          ...state,
          selected_packages: action.data,
        };
        case actionTypes.SET_SELECTED_MATCH:
        return {
          ...state,
          selected_match: action.data,
        };
        // case actionTypes.SET_MINIMIZE:
        //   return {
        //     ...state,
        //     minimize: action.data,
        //   };

    default:
      return state;
  }
};

export default commonReducer;
