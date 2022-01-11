import * as actionTypes from "./constants";
import { getTopBanners } from "@/service/recommend";

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
