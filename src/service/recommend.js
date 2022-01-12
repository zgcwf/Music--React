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
