import React, { memo } from "react";
import { Slider } from "antd";
import { NavLink } from "react-router-dom";

import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";

export default memo(function AppPlayBar() {
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
            <NavLink to={`/song?id=1456890009`}>
              <img
                src="	https://p4.music.126.net/yN1ke1xYMJ718FiHaDWtYQ==/109951165076380471.jpg?param=34y34"
                alt=""
              />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <NavLink to={`/song?id=1456890009`} className="song-name">
                雅俗共赏
              </NavLink>
              <NavLink to={`/artist?id=33259235`} className="singer-name">
                许嵩
              </NavLink>
            </div>
            <div className="progress">
              <Slider />
              <div className="time">
                <span className="now-time">2:30</span>
                <span className="dividers">/</span>
                <span>4:30</span>
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
