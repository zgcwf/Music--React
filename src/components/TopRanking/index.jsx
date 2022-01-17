// 封装榜单排行组件
import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { TopRankingWrapper } from "./style";
import { getSizeImage } from "@/utils/Rec-format";
import { getSongDetailAction } from "@/pages/Player/store/actionCreators";

export default memo(function TopRanking(props) {
  const { info = [] } = props;
  const { tracks = [] } = info;
  // redux hooks
  const dispatch = useDispatch();

  // other handle
  // 点击在下方播放音乐
  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  };

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl, 80)} alt={info.name} />
          <NavLink
            to={"xx"}
            className="image_cover"
            title={info.name}
          ></NavLink>
        </div>
        <div className="info">
          <NavLink to={`/discover/toplist?id=${info.id}`}>{info.name}</NavLink>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks?.slice(0, 10).map((item, index) => {
          return (
            <div key={item.id} className="list-item">
              <div className="rank">{index + 1}</div>
              <div className="info">
                <NavLink to={`song?id=${item.id}`} className="name text-nowrap">
                  {item.name}
                </NavLink>
                <div className="operate">
                  <button
                    className="btn sprite_02 play"
                    onClick={(e) => playMusic(item)}
                  ></button>
                  <button className="btn sprite_icon2 addto"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <NavLink to={`/discover/toplist?id=${info.id}`}>查看全部</NavLink>
      </div>
    </TopRankingWrapper>
  );
});
