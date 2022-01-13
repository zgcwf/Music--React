import request from "./request";

// 请求轮播图数据
export function getTopBanners() {
  return request({
    method: "get",
    url: "banner",
  });
}
// 请求热门推荐数据，参数limit为限制取几条数据
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

//  请求榜单数据,参数idx判断到底是哪个榜单 0-新歌榜,2-原创榜,3-飙升榜
export function getTopList(idx) {
  return request({
    url: "/top/list",
    params: {
      idx,
    },
  });
}

// 请求入住歌手数据
export function getArtistList(limit, cat) {
  return request({
    url: "/artist/list",
    params: {
      limit,
      cat,
    },
  });
}
