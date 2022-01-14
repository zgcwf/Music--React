import React, { memo, useEffect } from "react";
import { Slider } from "antd";
import { NavLink } from "react-router-dom";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";
import { getSongDetailAction } from "../store/actionCreators.js";
import { getSizeImage, formatMinuteSecond } from "@/utils/Rec-format";

export default memo(function AppPlayBar() {
  // redux hooks
  const dispatch = useDispatch();
  const { currentSong } = useSelector(
    (state) => ({
      currentSong: state.getIn(["player", "currentSong"]),
    }),
    shallowEqual
  );

  // other hooks
  useEffect(() => {
    dispatch(getSongDetailAction(167876));
  }, [dispatch]);

  // other handle
  const picUrl = (currentSong && currentSong.al && currentSong.al.picUrl) || "";
  const songName = (currentSong && currentSong.name) || "未知歌曲";
  const singerName =
    (currentSong && currentSong.ar && currentSong.ar[0].name) || "未知歌手";
  const duration = (currentSong && currentSong.dt) || 0;
  const showDuration = formatMinuteSecond(duration);

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="prev sprite_player"></button>
          <button className="play sprite_player"></button>
          <button className="next sprite_player"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to={`/song?id=${currentSong && currentSong.id}`}>
              <img src={getSizeImage(picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <NavLink to={`/song?id=${currentSong.id}`} className="song-name">
                {songName}
              </NavLink>
              <NavLink
                to={`/artist?id=${currentSong.ar && currentSong.ar[0].id}`}
                className="singer-name"
              >
                {singerName}
              </NavLink>
            </div>
            <div className="progress">
              <Slider />
              <div className="time">
                <span className="now-time">2:30</span>
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
    </PlaybarWrapper>
  );
});
