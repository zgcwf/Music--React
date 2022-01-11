// 轮播图组件
import React, { memo, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Carousel } from "antd";

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";
import { getTopBannerAction } from "../../store/actionCreators";

function TopBanner() {
  // 组件自己的hooks
  const [current, setCurrent] = useState(0);

  // redux的相关hooks
  // 返回Redux store中对dispatch函数的引用。你可以根据需要使用它
  const dispatch = useDispatch();
  // 从redux的store对象中提取数据(state)。
  const { topBanners } = useSelector(
    (state) => ({
      // topBanners: state.recommend.topBanners,//普通读取数据方法
      // topBanners: state.get("recommend").get("topBanners"), //ImmutableJS读取数据方法
      topBanners: state.getIn(["recommend", "topBanners"]), //简写
    }),
    shallowEqual
  );

  // 其他hooks
  const bannerRef = useRef();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  // 其他业务逻辑
  const previous = () => {
    bannerRef.current.prev();
  };
  const next = () => {
    bannerRef.current.next();
  };
  const bannerChange = (from, to) => {
    setCurrent(to);
  };
  const bgImage =
    topBanners[current] &&
    topBanners[current].imageUrl + "?imageView&blur=40x20";

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            ref={bannerRef}
            beforeChange={bannerChange}
          >
            {topBanners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={previous}></button>
          <button className="btn right" onClick={next}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
}

export default memo(TopBanner);

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
