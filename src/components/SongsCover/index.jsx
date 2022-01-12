import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import { SongsCoverWrapper } from "./style";
import { getCount, getSizeImage } from "@/utils/Rec-format";

export default memo(function SongsCover(props) {
  const { info } = props;

  return (
    <SongsCoverWrapper>
      <NavLink to={`/playlist?id=${info.id}`}>
        <div className="cover-top" title={info.name}>
          <img src={getSizeImage(info.picUrl, 140)} alt={info.name} />
          <div className="cover sprite_covor">
            <div className="info sprite_covor">
              <span>
                <i className="sprite_icon erji"></i>
                {getCount(info.playCount)}
              </span>
              <i className="sprite_icon play"></i>
            </div>
          </div>
        </div>
        <div className="cover-bottom text-nowrap">{info.name}</div>
        <div className="cover-source text-nowrap">
          by {info.copywriter || (info.creator && info.creator.nickname)}
        </div>
      </NavLink>
    </SongsCoverWrapper>
  );
});
