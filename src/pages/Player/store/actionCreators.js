import { getSongDetail, getLyric } from "@/service/player";
import * as actionTypes from "./constants";

// 改变当前播放列表的播放歌曲
const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong,
});
//改变当前的播放列表
const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList,
});
// 改变当前播放歌曲在播放列表的索引值
const changeCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index,
});

// 改变当前播放歌曲在播放列表的播放顺序(// 0 循环 1 随机 2 单曲)
export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence,
});

// 异步请求当前播放的歌曲
export const getSongDetailAction = (ids) => {
  return async (dispatch, getState) => {
    // 1.获取数据，并根据id查找playList中是否已经有了该歌曲
    const playList = getState().getIn(["player", "playList"]) || [];
    const songIndex = playList && playList.findIndex((song) => song.id === ids);
    // 2.判断是否找到歌曲
    if (songIndex !== -1) {
      // 查找到歌曲
      dispatch(changeCurrentSongIndexAction(songIndex));
      dispatch(changeCurrentSongAction(playList && playList[songIndex]));
    } else {
      // 没有找到歌曲--请求歌曲数据
      const res = await getSongDetail(ids);
      const song = res.songs && res.songs[0];

      // 1.将最新请求到的歌曲添加到播放列表中
      const newPlayList = [...playList, song];
      // 2.更新redux中的值
      dispatch(changePlayListAction(newPlayList));
      dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
      dispatch(changeCurrentSongAction(song));
    }
  };
};
