// 推荐
import React, { memo } from "react";

import { Content, RecommendLeft, RecommendRight } from "./style";

import TopBanner from "./c-cpns/TopBanner";
import HotRecommend from "./c-cpns/HotRecommend";
import NewAlbum from "./c-cpns/NewAlbum";
import RecommendRanking from "./c-cpns/RecommendRanking";
import UserLogin from "./c-cpns/UserLogin";
import SettleSinger from "./c-cpns/SettleSinger";
import HotAnchor from "./c-cpns/HotAnchor";
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
        <RecommendRight>
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </RecommendRight>
      </Content>
    </div>
  );
}

export default memo(Recommend);
