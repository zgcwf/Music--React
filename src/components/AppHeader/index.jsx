// 头部组件
import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Input, Button } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import { headerLinks } from "@/common/local-data";

export default memo(function AppHeader() {
  // 设置前三个为路由跳转，后面为链接跳转
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      );
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  };

  return (
    <HeaderWrapper>
      <div className="content  wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className="select-item">
                  {showSelectItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <Button className="center">创作者中心</Button>
          <Button shape="circle" icon={<UserOutlined />}></Button>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
