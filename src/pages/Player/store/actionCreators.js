import { getSongDetail, getLyric } from "@/service/player";
import * as actionTypes from "./constants";

// 异步请求当前播放的歌词
const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});
export const getSongDetailAction = (ids) => {
  return async (dispatch, getState) => {
    const res = await getSongDetail(ids);

    dispatch(changeCurrentSongAction(res.songs && res.songs[0]));
  };
};
