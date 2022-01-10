import React, { memo, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { dicoverMenu } from "@/common/local-data.js";
import { DiscoverWrapper, TopMenu } from "./style";
import request from "@/service/request.js";

export default memo(function Discover(props) {
  const {
    route: { routes },
  } = props;
  useEffect(() => {
    request({
      url: "/banner",
    }).then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {dicoverMenu.map((item) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      {renderRoutes(routes)}
    </DiscoverWrapper>
  );
});
