import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import ProTypes from "prop-types";

import { HeaderWrapper } from "./style";

const ThemeHeaderRec = memo((props) => {
  const { title, keywords } = props;

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keywords.map((item) => {
            return (
              <div key={item} className="item">
                <NavLink to="xxx">{item}</NavLink>
                <i className="dividers">|</i>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <NavLink to="XXX">更多</NavLink>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  );
});

// 类型校验
ThemeHeaderRec.ProTypes = {
  title: ProTypes.string.isRequired,
  keywords: ProTypes.array,
};
// 设置默认值，保证keywords不为undefined，避免报错
ThemeHeaderRec.defaultProps = {
  keywords: [],
};
export default ThemeHeaderRec;
