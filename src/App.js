// 导入的第三方库
import React, { memo, Suspense } from "react";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

// 导入自己定义的工具
import routes from "./router";
import store from "./store/index";

// 导入组件
import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import AppPlayBar from "./pages/Player/AppPlayBar";
import Loading from "./components/Loading";
export default memo(function App() {
  return (
    <div>
      <Provider store={store}>
        <AppHeader />
        <Suspense fallback={<Loading />}>{renderRoutes(routes)}</Suspense>
        <AppFooter />
        <AppPlayBar />
      </Provider>
    </div>
  );
});
