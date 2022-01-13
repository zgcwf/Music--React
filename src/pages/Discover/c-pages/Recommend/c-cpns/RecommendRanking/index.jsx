import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import { getTopListAction } from "../../store/actionCreators";

import ThemeHeaderRec from "@/components/ThemeHeaderRec";

export default memo(function RecommendRanking() {
  // redux hooks
  const dispatch = useDispatch();
  // other hooks
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch]);
  return (
    <div>
      <ThemeHeaderRec title="榜单" />
      <div>RecommendRanking</div>
    </div>
  );
});
