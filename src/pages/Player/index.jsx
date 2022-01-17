import React, { memo } from "react";
import { qs } from "url-parse"; //要引入

import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";

export default memo(function HYPlayer(props) {
  // 接收search参数
  const { search } = props.location;
  const { id } = qs.parse(search);
  console.log(id);
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>HYPlayerInfo</h2>
          <h2>HYSongContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>HYSimiPlaylist</h2>
          <h2>HYSimiSong</h2>
          <h2>Download</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
});
