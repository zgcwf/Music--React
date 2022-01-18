import { Map } from "immutable";

import * as actionTypes from "./constants";
import { playListSong } from "@/common/local-data";
const defaultState = Map({
  playList: [...playListSong], //歌曲列表
  currentSongIndex: 0, //当前歌曲索引
  currentSong: {}, //当前歌曲
  sequence: 0, // 0 循环 1 随机 2 单曲
  lyricList: [], //当前歌词
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.index);
    case actionTypes.CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence);
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.lyricList);
    default:
      return state;
  }
}
export default reducer;
