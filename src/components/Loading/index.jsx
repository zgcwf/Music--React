import React, { memo } from "react";
import { Spin } from "antd";

import { LoadingWrapper } from "./style";

export default memo(function Loading() {
  return (
    <LoadingWrapper>
      <div>
        <Spin size="large" />
      </div>
      <div className="fontLoading">...loading</div>
    </LoadingWrapper>
  );
});
