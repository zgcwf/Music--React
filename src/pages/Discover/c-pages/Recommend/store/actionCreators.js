import { notification } from "antd";

import * as actionTypes from "./constants";
import {
  getTopBanners,
  getHotRecommends,
  getNewAlbum,
  getTopList,
  getArtistList,
} from "@/service/recommend";

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

// 异步请求榜单数据
// 飙升榜
const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist,
});
// 新歌榜
const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist,
});
// 原创榜
const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist,
});

export const getTopListAction = (idx) => {
  return async (dispatch) => {
    const res = await getTopList(idx);
    switch (idx) {
      case 0:
        dispatch(changeNewRankingAction(res));
        break;
      case 2:
        dispatch(changeOriginRankingAction(res));
        break;
      case 3:
        dispatch(changeUpRankingAction(res));
        break;
      default:
        notification.error({
          message: `参数异常`,
          description: `Recommend/store/actionCreators内getTopListAction函数参数异常，
            应得到值为0,1,2`,
        });
    }
    // getTopList(idx).then((res) => {
    //   switch (idx) {
    //     case 0:
    //       dispatch(changeUpRankingAction(res));
    //       break;
    //     case 2:
    //       dispatch(changeNewRankingAction(res));
    //       break;
    //     case 3:
    //       dispatch(changeOriginRankingAction(res));
    //       break;
    //     default:
    //       notification.error({
    //         message: `参数异常`,
    //         description: `Recommend/store/actionCreators内getTopListAction函数参数异常，
    //         应得到值为0,1,2`,
    //       });
    //   }
    // });
  };
};

// 异步请求入驻歌手数据--then链式调用
const changeSettleSingsAction = (res) => ({
  type: actionTypes.CHANGE_SETTLE_SONGER,
  settleSings: res.artists,
});
export const getSettleSingers = (limit) => {
  return (dispatch) => {
    getArtistList(limit).then((res) => {
      dispatch(changeSettleSingsAction(res));
    });
  };
};
