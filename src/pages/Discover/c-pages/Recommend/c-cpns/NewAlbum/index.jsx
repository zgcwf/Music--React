import React, { memo } from "react";

import ThemeHeaderRec from "@/components/ThemeHeaderRec";

export default memo(function NewAlbum() {
  return (
    <div>
      <ThemeHeaderRec title="新碟上架" />
      <div>NewAlbum</div>
    </div>
  );
});
