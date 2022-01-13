// 新碟上架
import React, { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Carousel } from "antd";

import { getNewAlbumAction } from "../../store/actionCreators";
import { NEW_ALBUM_LIMIT } from "@/common/constants";
import { AlbumWrapper } from "./style";

import ThemeHeaderRec from "@/components/ThemeHeaderRec";
import AlbumCover from "@/components/AlbumCover";

export default memo(function NewAlbum() {
  const dispatch = useDispatch();
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    }),
    shallowEqual
  );

  const pageRef = useRef();

  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUM_LIMIT));
  }, [dispatch]);

  //前进
  const previous = () => {
    pageRef.current.prev();
  };
  // 后退
  const next = () => {
    pageRef.current.next();
  };

  return (
    <AlbumWrapper>
      <ThemeHeaderRec title="新碟上架" />
      <div className="content">
        <button
          className="arrow sprite_02 arrow-left"
          onClick={previous}
        ></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbums.slice(item * 5, (item + 1) * 5).map((thing) => {
                    return (
                      <AlbumCover
                        key={thing.id}
                        info={thing}
                        size={100}
                        width={118}
                        bgp="-570px"
                      />
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
          ,
        </div>
        <button className="arrow sprite_02 arrow-right" onClick={next}></button>
      </div>
    </AlbumWrapper>
  );
});
