import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Carousel } from "antd";

import { getNewAlbumAction } from "../../store/actionCreators";
import { NEW_ALBUM_LIMIT } from "@/common/constants";
import { AlbumWrapper } from "./style";

import ThemeHeaderRec from "@/components/ThemeHeaderRec";

export default memo(function NewAlbum() {
  const dispatch = useDispatch();
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    }),
    shallowEqual
  );
  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUM_LIMIT));
  }, [dispatch]);
  return (
    <AlbumWrapper>
      <ThemeHeaderRec title="新碟上架" />
      <div className="content">
        <button className="arrow sprite_02 arrow-left"></button>
        <div className="album">
          <Carousel dots={false}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((thing) => {
                    return <div key={thing.id}>{thing.name}</div>;
                  })}
                </div>
              );
            })}
          </Carousel>
          ,
        </div>
        <button className="arrow sprite_02 arrow-right"></button>
      </div>
    </AlbumWrapper>
  );
});
