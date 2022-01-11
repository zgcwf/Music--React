import request from "./request";

export function getTopBanners() {
  return request({
    method: "get",
    url: "banner",
  });
}
