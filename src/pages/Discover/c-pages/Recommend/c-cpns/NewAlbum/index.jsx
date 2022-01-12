import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getNewAlbumAction } from '../../store/actionCreators'
import { NEW_ALBUM_LIMIT } from '@/common/constants'
import ThemeHeaderRec from "@/components/ThemeHeaderRec";

export default memo(function NewAlbum() {

  const dispatch = useDispatch()
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual)
  useEffect(() => {
    dispatch(getNewAlbumAction(NEW_ALBUM_LIMIT))
  }, [dispatch])
  return (
    <div>
      <ThemeHeaderRec title="新碟上架" />
      {newAlbums.map((item) => {
        return (
          <div key={item.id}>{item.name}</div>
        )
      })}
    </div>
  );
});
