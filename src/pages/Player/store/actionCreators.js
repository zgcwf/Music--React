import { getSongDetail, getLyric } from "@/service/player";
import { getRandomNumber, parseLyric } from "@/utils/Rec-format";
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

// 改变当前的歌词
const changLyricListAction = (lyricList) => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  lyricList,
});

// 获取歌曲的歌词
export const getLyricAction = (id) => {
  return (dispatch) => {
    getLyric(id).then((res) => {
      const lyric = res.lrc.lyric;
      const lyricList = parseLyric(lyric);
      dispatch(changLyricListAction(lyricList));
    });
  };
};

// 当前歌词的索引
export const changeCurrentLyricIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index,
});

// 异步请求当前播放的歌曲
export const getSongDetailAction = (ids) => {
  return async (dispatch, getState) => {
    // 1.获取数据，并根据id查找playList中是否已经有了该歌曲
    const playList = getState().getIn(["player", "playList"]) || [];
    const songIndex = playList && playList.findIndex((song) => song.id === ids);
    // 2.判断是否找到歌曲
    let song = null;
    if (songIndex !== -1) {
      // 查找到歌曲
      dispatch(changeCurrentSongIndexAction(songIndex));
      song = playList && playList[songIndex];
      dispatch(changeCurrentSongAction(song));
      dispatch(getLyricAction(song.id));
    } else {
      // 没有找到歌曲--请求歌曲数据
      const res = await getSongDetail(ids);
      song = res.songs && res.songs[0];
      if (!song) return;

      // 1.将最新请求到的歌曲添加到播放列表中
      const newPlayList = [...playList, song];
      // 2.更新redux中的值
      dispatch(changePlayListAction(newPlayList));
      dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
      dispatch(changeCurrentSongAction(song));
      // 3.请求歌词
      dispatch(getLyricAction(song.id));
    }
  };
};

// 点击左右按钮，切换(<- ->)播放歌曲
export const changeCurrentIndexAndSongAction = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"]);
    const sequence = getState().getIn(["player", "sequence"]);
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
    // 得到新索引
    switch (sequence) {
      case 1: //随机播放
        // 随机播放时，得到一个随机索引值
        let randomIndex = getRandomNumber(playList.length);
        // 如果得到的索引值等于当前索引，重新得到一个新的索引
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playList.length);
        }
        currentSongIndex = randomIndex;
        break;
      default:
        //其他情况，即单曲或者循环播放时（这两种情况点击左右切换按钮都会切换歌曲）
        currentSongIndex = currentSongIndex + tag;
        if (currentSongIndex >= playList.length) {
          currentSongIndex = 0;
        }
        if (currentSongIndex < 0) {
          currentSongIndex = playList.length - 1;
        }
    }
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
    // 请求歌词
    dispatch(getLyricAction(currentSong.id));
  };
};
