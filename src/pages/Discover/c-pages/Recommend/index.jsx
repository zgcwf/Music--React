// 推荐
import React, { memo } from "react";

import { Content, RecommendLeft, RecommendRight } from "./style";

import TopBanner from "./c-cpns/TopBanner";
import HotRecommend from "./c-cpns/HotRecommend";
import NewAlbum from "./c-cpns/NewAlbum";
import RecommendRanking from "./c-cpns/RecommendRanking";
function Recommend() {
  return (
    <div>
      <TopBanner />
      <Content>
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <RecommendRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </div>
  );
}

export default memo(Recommend);
