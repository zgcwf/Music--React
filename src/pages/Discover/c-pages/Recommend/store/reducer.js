//ImmutableJS方法
import * as actionTypes from "./constants";
import { Map } from "immutable";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],

  upRanking: {},
  newRanking: {},
  originRanking: {},

  settleSings: [],
});
function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums);
    case actionTypes.CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking);
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking);
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking);
    case actionTypes.CHANGE_SETTLE_SONGER:
      return state.set("settleSings", action.settleSings);
    default:
      return state;
  }
}
export default reducer;

// 普通方法
// import * as actionTypes from "./constants";

// const defaultState = {
//   topBanners: [],
// };
// function reducer(state = defaultState, action) {
//   switch (action.type) {
//     case actionTypes.CHANGE_TOP_BANNERS:
//       return { ...state, topBanners: action.topBanners };
//     default:
//       return state;
//   }
// }
// export default reducer;
