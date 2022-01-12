import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getHotRecommendAction } from "../../store/actionCreators";
import { HOT_RECOMMEND_LIMIT } from "@/common/contants";
import { HotRecommendWrapper } from "./style";

import ThemeHeaderRec from "@/components/ThemeHeaderRec";

export default memo(function HotRecommend() {
  // redux hooks
  const dispatch = useDispatch();
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"]),
    }),
    shallowEqual
  );
  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);
  return (
    <HotRecommendWrapper>
      <ThemeHeaderRec
        title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
      />
      <div className="recommend-list">
        {hotRecommends.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </HotRecommendWrapper>
  );
});
