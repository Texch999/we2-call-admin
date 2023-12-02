import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import commonReducer from "./reducers/commonReducer";
import dataReducer from "./reducers/dataReducer";

const rootReducer = combineReducers({
  common: commonReducer,
  data: dataReducer,
});

const persistConfig = {
  key: "data",
  storage,
};

const logger = (store) => (next) => (action) => {
  // console.log("logger 1 dispatching action:", action);
  // console.log("store", store);
  return next(action);
};

const thunk =
  (args) =>
  ({ getState, dispatch }) =>
  (next) =>
  (action) => {
    // console.log("inside thunk");
    if (typeof action === "function") {
      return action(dispatch, getState, args);
    }
    return next(action);
  };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk(), logger))
);

const persistor = persistStore(store);

export { persistor };
// console.log(store.getState());
