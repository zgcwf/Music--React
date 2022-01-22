import React, { memo } from "react";
// import { qs } from "url-parse"; //要引入

import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";

import PlayerInfo from './c-cpns/PlayerInfo';
import PlayerComment from './c-cpns/PlayerComment';
import PlayerSongs from './c-cpns/PlayerSongs';
import PlayerRelevant from './c-cpns/PlayerRelevant';
export default memo(function Player(props) {
  // 接收search参数
  // const { search } = props.location;
  // const { id } = qs.parse(search);
  // const ids = parseInt(id)
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <PlayerInfo />
          <PlayerComment />
        </PlayerLeft>
        <PlayerRight>
          <PlayerSongs />
          <PlayerRelevant />
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
});
