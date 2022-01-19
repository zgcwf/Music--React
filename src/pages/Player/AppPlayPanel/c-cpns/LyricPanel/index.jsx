import React, { memo, useRef, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";
import classNames from "classnames";

import { scrollTo } from "@/utils/Rec-format";
import { PanelWrapper } from "./style";

export default memo(function LyricPanel() {
  // redux hooks
  const { lyricList, currentLyricIndex } = useSelector(
    (state) => ({
      lyricList: state.getIn(["player", "lyricList"]),
      currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
    }),
    shallowEqual
  );

  // other hooks
  const panelRef = useRef();
  useEffect(() => {
    // console.log(currentLyricIndex);
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    scrollTo(panelRef.current, (currentLyricIndex - 3) * 32, 300);
  }, [currentLyricIndex]);

  return (
    <PanelWrapper ref={panelRef}>
      <div className="lrc-content">
        {lyricList.map((item, index) => {
          return (
            <div
              key={item.time}
              className={classNames("lrc-item", "text-nowrap", {
                active: index === currentLyricIndex,
              })}
            >
              {item.content}
            </div>
          );
        })}
      </div>
    </PanelWrapper>
  );
});
