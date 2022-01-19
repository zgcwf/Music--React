import React, { memo } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import classNames from "classnames";

import { formatMinuteSecond } from "@/utils/Rec-format";
import { PlayListWrapper } from "./style";
import { getSongDetailAction } from "../../../store/actionCreators.js";

export default memo(function PlayList() {
  const dispatch = useDispatch();

  const { playList, currentSongIndex } = useSelector(
    (state) => ({
      playList: state.getIn(["player", "playList"]),
      currentSongIndex: state.getIn(["player", "currentSongIndex"]),
    }),
    shallowEqual
  );
  // 点击切换音乐
  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  };
  return (
    <PlayListWrapper>
      {playList.map((item, index) => {
        return (
          <div
            key={item.id}
            className={classNames("play-item", {
              active: currentSongIndex === index,
            })}
          >
            <div className="left">
              <div
                className="songName text-nowrap"
                onClick={(e) => playMusic(item)}
              >
                {item.name}
              </div>
              <div className="icon">
                <button className="btn sprite_playlist  favor"></button>
                <button className="btn sprite_playlist share"></button>
                <button className="btn sprite_playlist download"></button>
                <button className="btn sprite_playlist remove"></button>
              </div>
            </div>
            <div className="right">
              <span className="singer">{item.ar[0].name}</span>
              <span className="duration">{formatMinuteSecond(item.dt)}</span>
              <span className="sprite_playlist link"></span>
            </div>
          </div>
        );
      })}
    </PlayListWrapper>
  );
});
