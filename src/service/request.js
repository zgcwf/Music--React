import axios from "axios";
import * as qs from "qs";

import { BASE_URL, TIMEOUT, errorHandler } from "./config";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

// 请求拦截
// qs 序列化 防止XSRF攻击 可以对深层次的json array进行序列化
instance.interceptors.request.use(
  (config) => {
    if (config.url.indexOf("?") !== -1) {
      config.url += `&t=${new Date().getTime()}`;
    } else {
      config.url += `?t=${new Date().getTime()}`;
    }
    // `transformRequest` 允许在向服务器发送前，修改请求数据
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    config.transformRequest = [
      (data, headers) => {
        return qs.stringify(data, {
          allowDots: true,
        });
      },
    ];
    // `paramsSerializer` 是一个负责 `params` 序列化的函数
    config.paramsSerializer = (params) => {
      return qs.stringify(params, {
        arrayFormat: "repeat",
      });
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截
instance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (err && err.response) {
      errorHandler(err);
    }
    return err;
  }
);

export default instance;
