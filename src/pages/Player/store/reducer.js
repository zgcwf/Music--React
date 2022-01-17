import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  playList: [],
  currentSongIndex: 0,
  currentSong: {},
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.index);
    default:
      return state;
  }
}
export default reducer;
