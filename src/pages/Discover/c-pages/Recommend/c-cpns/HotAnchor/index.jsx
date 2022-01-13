import React, { memo } from "react";

import { hotRadios } from "@/common/local-data";
import { HotRadioWrapper } from "./style";
import { getSizeImage } from "@/utils/Rec-format";

import ThemeHeaderSmall from "@/components/ThemeHeaderSmall";

export default memo(function HotAnchor() {
  return (
    <HotRadioWrapper>
      <ThemeHeaderSmall title="热门主播" />
      <div className="radio-list">
        {hotRadios.map((item) => {
          return (
            <div className="item" key={item.picUrl}>
              <a href="/abc" className="image">
                <img src={getSizeImage(item.picUrl, 40)} alt="" />
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position text-nowrap">{item.position}</div>
              </div>
            </div>
          );
        })}
      </div>
    </HotRadioWrapper>
  );
});
