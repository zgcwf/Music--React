import React, { memo } from "react";

import ThemeHeaderRec from "@/components/ThemeHeaderRec";
export default memo(function HotRecommend() {
  return (
    <div>
      <ThemeHeaderRec
        title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
      />
      HotRecommend
    </div>
  );
});
