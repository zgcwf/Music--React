// 进行播放数字格式转换
export function getCount(count) {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
}
// 给图片地址拼接上尺寸，从服务器获取合适尺寸图片，进行性能优化
export function getSizeImage(imgUrl, size) {
  return `${imgUrl}?param=${size}y${size}`;
}
