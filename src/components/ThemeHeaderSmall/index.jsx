// 入驻歌手、热门主播模块的头部公共组件
import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { HeaderWrapper } from "./style";

const ThemeHeaderSmall = memo(function (props) {
  const { title, more } = props;

  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <NavLink to="/discover/artist/signed/">{more}</NavLink>
    </HeaderWrapper>
  );
});
ThemeHeaderSmall.defaultProps = {};

ThemeHeaderSmall.propTypes = {
  title: PropTypes.string.isRequired,
  more: PropTypes.string,
};
export default ThemeHeaderSmall;
