import React, { memo, useEffect } from "react";
import { connect } from "react-redux";

import { getTopBannerAction } from "./store/actionCreators";

function Recommend(props) {
  const { getBanners, topBanners } = props;

  useEffect(() => {
    getBanners();
  }, [getBanners]);

  return <div>Recommend:{topBanners.length}</div>;
}
// 将下方的state与方法映射到props中
const mapStateToProps = (state) => {
  return {
    topBanners: state.recommend.topBanners,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getBanners: () => {
      dispatch(getTopBannerAction());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));
