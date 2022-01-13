import request from "./request";

// 请求轮播图数据
export function getTopBanners() {
  return request({
    method: "get",
    url: "banner",
  });
}
// 请求热门推荐数据
export function getHotRecommends(limit) {
  return request({
    method: "get",
    url: "/personalized",
    params: {
      limit: limit,
    },
  });
}

// 请求新碟上架数据（get请求参数两种写法）
export function getNewAlbum(limit) {
  return request({
    method: "get",
    // url: `/top/album?limit=${limit}`,
    url: `/top/album`,
    params: {
      limit: limit,
    },
  });
}
