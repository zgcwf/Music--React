// import { combineReducers } from "redux";
import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "../pages/Discover/c-pages/Recommend/store";
//合并
const reducer = combineReducers({
  recommend: recommendReducer,
});

export default reducer;
