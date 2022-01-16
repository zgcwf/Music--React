import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { Slider } from "antd";
import { NavLink } from "react-router-dom";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";
import { getSongDetailAction } from "../store/actionCreators.js";
import {
  getSizeImage,
  formatMinuteSecond,
  getPlaySong,
  numberDiff
} from "@/utils/Rec-format";

export default memo(function AppPlayBar() {
  // state and props
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [changing, setChanging] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  // redux hooks
  const dispatch = useDispatch();
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
    }),
    shallowEqual
  );

  // other hooks
  const audioRef = useRef();
  useEffect(() => {
    dispatch(getSongDetailAction(28844143));
  }, [dispatch]);
  // 为audio添加上播放音乐的路径
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
  }, [currentSong])

  // other handle
  // 保证数据不为undefined
  const picUrl = (currentSong && currentSong.al && currentSong.al.picUrl) || "";
  const songName = (currentSong && currentSong.name) || "未知歌曲";
  const songId = (currentSong && currentSong.id);
  const singerId = currentSong && currentSong.ar && currentSong.ar[0].id;
  const singerName =
    (currentSong && currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  const duration = (currentSong && currentSong.dt) || 0;
  //将毫秒转换成对应格式 mm:ss
  const showDuration = formatMinuteSecond(duration); //总时间
  const showCurrentTime = formatMinuteSecond(currentTime); //当前时间
  // handle function
  // audio时间发生变动调用该方法
  const timeUpdate = (e) => {
    //e.target为audio,e.target.currentTime为当前播放的时间(秒)
    const currentTimes = e.target.currentTime;
    // 如果其自然播放而没有滑动,则执行内部的方法
    if (!changing) {
      //将其转换成毫秒,并将当前时间存入state
      setCurrentTime(currentTimes * 1000);
      // 获取currentTimes/总时间 所占的比例（0.xx）*100，即xx%，存入state
      setProgress(((currentTimes * 1000) / duration) * 100);
    }
    // 判断当前播放时间与总时间差的值是否小于999毫秒
    if (numberDiff(currentTimes * 1000, duration)) {
      setIsPlaying(false)
      setProgress(0)
    }
  };

  // 点击播放、暂停音乐按钮，并调用play/pause方法进行播放/暂停
  const playMusic = useCallback(
    () => {
      isPlaying ? audioRef.current.pause() : audioRef.current.play()
      setIsPlaying(!isPlaying)
    }, [isPlaying]
  )

  // 鼠标划入提示播放进度
  const formatter = (value) => {
    return `${value}%`;
  }

  // 在鼠标在滑动条来回滑动时调用
  const sliderChange = useCallback((value) => {
    setChanging(true)

    const currentTimes = value / 100 * duration;
    setCurrentTime(currentTimes);
    setProgress(value)
  }, [duration])

  // 在鼠标在滚动条中弹起时调用
  const sliderAfterChange = useCallback((value) => {
    setChanging(false)

    const currentTimes = value / 100 * duration / 1000
    // 将audio当前播放时间设置为currentTimes
    audioRef.current.currentTime = currentTimes
    setCurrentTime(currentTimes * 1000)

    if (!isPlaying) {
      playMusic();
    }
  }, [duration, isPlaying, playMusic])
  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="prev sprite_player"></button>
          <button
            className="play sprite_player"
            onClick={(e) => playMusic()}
          ></button>
          <button className="next sprite_player"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to={`/song?id=${songId}`}>
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <NavLink
                to={`/song?id=${songId}`}
                className="song-name"
              >
                {songName}
              </NavLink>
              <NavLink to={`/artist?id=${singerId}`} className="singer-name">
                {singerName}
              </NavLink>
            </div>
            <div className="progress">
              <Slider
                value={progress}
                tipFormatter={formatter}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="dividers">/</span>
                <span>{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist">3</button>
          </div>
        </Operator>
      </div>
      {/* onTimeUpdate,audio时间发生变动调用该方法 */}
      <audio ref={audioRef} onTimeUpdate={(e) => timeUpdate(e)} />
    </PlaybarWrapper>
  );
});
