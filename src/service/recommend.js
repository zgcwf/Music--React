import request from "./request";

// 请求轮播图数据
export function getTopBanners() {
  return request({
    method: "get",
    url: "banner",
  });
}
