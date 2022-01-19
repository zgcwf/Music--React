import React, { memo } from "react";

import PlayHeader from "./c-cpns/PlayHeader";
import PlayList from "./c-cpns/PlayList";
import LyricPanel from "./c-cpns/LyricPanel";
import { PanelWrapper } from "./style";

export default memo(function AppPlayPanel() {
  return (
    <PanelWrapper>
      <PlayHeader />
      <div className="main">
        <img
          className="image"
          src="https://p4.music.126.net/qeN7o2R3_OTPhghmkctFBQ==/764160591569856.jpg"
          alt=""
        />
        <PlayList />
        <LyricPanel />
      </div>
    </PanelWrapper>
  );
});
