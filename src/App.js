// 导入的第三方库
import React, { memo } from "react";
import { renderRoutes } from "react-router-config";

// 导入自己定义的工具
import routes from "./router";

// 导入组件
import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";

export default memo(function App() {
  return (
    <div>
      <AppHeader />
      {renderRoutes(routes)}
      <AppFooter />
    </div>
  );
});
