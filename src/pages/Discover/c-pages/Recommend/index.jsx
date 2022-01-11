import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTopBannerAction } from "./store/actionCreators";

function Recommend(props) {
  // 使用hooks代替传统redux，获取数据和进行操作

  // 返回Redux store中对dispatch函数的引用。你可以根据需要使用它
  const dispatch = useDispatch();

  // 从redux的store对象中提取数据(state)。
  const banners = useSelector((state) => ({
    topBanners: state.recommend.topBanners,
  }));
  // console.log(banners);
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  return <div>Recommend:{banners.topBanners.length}</div>;
}

export default memo(Recommend);

// 传统react-redux
// import React, { memo, useEffect } from "react";
// import { connect } from "react-redux";

// import { getTopBannerAction } from "./store/actionCreators";

// function Recommend(props) {
//   const { getBanners, topBanners } = props;

//   // 调用映射到props的getBanners方法
//   useEffect(() => {
//     getBanners();
//   }, [getBanners]);

//   return <div>Recommend:{topBanners.length}</div>;
// }

// // 将下方的state与方法映射到props中
// const mapStateToProps = (state) => {
//   return {
//     topBanners: state.recommend.topBanners,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getBanners: () => {
//       dispatch(getTopBannerAction());
//     },
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));
