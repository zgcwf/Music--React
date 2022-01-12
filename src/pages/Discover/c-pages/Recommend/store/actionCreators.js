import * as actionTypes from "./constants";
import { getTopBanners } from "@/service/recommend";
import { getHotRecommends } from "@/service/recommend";

// 异步请求轮播图数据
export const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});
export const getTopBannerAction = () => {
  return async (dispatch) => {
    const res = await getTopBanners();
    dispatch(changeTopBannerAction(res));
  };
};

// 异步请求热门推荐数据
export const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result,
});
export const getHotRecommendAction = (limit) => {
  return async (dispatch) => {
    const res = await getHotRecommends(limit);
    dispatch(changeHotRecommendAction(res));
  };
};
