import axios from 'axios';

// 创建一个axios实例
let instance = axios.create({
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
  },
});

// http request 拦截器
instance.interceptors.request.use(
  config => {
    const token = sessionStorage.getItem('token');
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.authorization = token;  //请求头加上token
    }
    config.url = process.env.BASE_URI + config.url;
    return config;
  },
  err => {
    return Promise.reject(err);
  });

export default instance;
