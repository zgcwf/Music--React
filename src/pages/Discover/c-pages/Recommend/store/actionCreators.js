import * as actionTypes from "./constants";
import { getTopBanners, getHotRecommends, getNewAlbum } from "@/service/recommend";

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

// 异步请求新碟上架数据
export const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums,
});
export const getNewAlbumAction = (limit) => {
  return async (dispatch) => {
    const res = await getNewAlbum(limit);
    dispatch(changeNewAlbumAction(res));
  };
};