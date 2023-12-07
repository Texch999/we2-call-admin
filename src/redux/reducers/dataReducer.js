import { SET_MEETING_IS_STARTED, SET_MINIMIZE } from "../actions/actionConstants";

const initialState = {};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    // case GET_USER_DATA:
    //   console.log(payload,"payload")
    //   return { ...state, ...payload }
    //   case SIGN_UP_USER:
    //       return { ...state, signUpData: payload }
    //   case LOGIN_MODAL:
    //     return { ...state, loginModalStatus: payload }
      // case SET_MAXMIZE:
      //   return { ...state, isMaxmize: payload }
      case  SET_MINIMIZE:
        return { ...state, isMinimize: action.payload }
      case SET_MEETING_IS_STARTED:
        return { ...state, isMeetingStarted: action.payload }
    default:
      return state;
  }
};

export default dataReducer;
