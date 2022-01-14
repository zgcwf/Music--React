import React, { memo } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { getSettleSingers } from "../../store/actionCreators";
import { SetterSongerWrapper } from "./style";
import { getSizeImage } from "@/utils/Rec-format";

import ThemeHeaderSmall from "@/components/ThemeHeaderSmall";

export default memo(function SettleSinger() {
  // redux hooks
  const { settleSings } = useSelector((state) => ({
    settleSings: state.getIn(["recommend", "settleSings"]),
  }));
  const dispatch = useDispatch();
  // other hooks
  useEffect(() => {
    dispatch(getSettleSingers(5, 5));
  }, [dispatch]);
  return (
    <SetterSongerWrapper>
      <ThemeHeaderSmall title="入驻歌手" more="查看全部>" />
      <div className="singer-list">
        {settleSings &&
          settleSings.map((item) => {
            return (
              <NavLink
                to={`/user/home?id=${item.id}`}
                key={item.id}
                className="item"
              >
                <img src={getSizeImage(item.picUrl, 62)} alt="" />
                <div className="info">
                  <div className="title">{item.name}</div>
                  <div className="name">{item.name}</div>
                </div>
              </NavLink>
            );
          })}
      </div>
      <div className="apply-for">
        <a
          href="https://music.163.com/st/musician"
          target="_blank"
          rel="noreferrer noopener"
        >
          申请成为网易音乐人
        </a>
      </div>
    </SetterSongerWrapper>
  );
});
