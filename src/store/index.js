import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducer.js";

//  composeEnhancers函数--redux开发工具
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

const storeEnhancer = applyMiddleware(thunk);

const store = createStore(reducer, composeEnhancers(storeEnhancer));

export default store;
