// import { combineReducers } from "redux";
import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "../pages/Discover/c-pages/Recommend/store";
import { reducer as playerReducer } from "../pages/Player/store";
//合并
const reducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
});

export default reducer;
