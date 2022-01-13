import React, { memo } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getSettleSingers } from "../../store/actionCreators";

export default memo(function SettleSinger() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSettleSingers(5));
  });
  return (
    <div>
      <h2>SettleSinger</h2>
    </div>
  );
});
