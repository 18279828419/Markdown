import axios from "axios";
import md5 from 'js-md5';

// import qs from "qs";
import {
  Toast
} from "vant";

axios.defaults.baseURL = 'https://zy.zheyouxinxi.com/api'  //正式
// axios.defaults.baseURL = 'http://zy-test.zheyouxinxi.com/api' //测试
//设置超时
axios.defaults.timeout = 10000;

//post请求头
// var appKey = '5FCBBD94FE47ABB943CA9397DAD7F7B9' // test
var timestamp = parseInt((new Date).getTime() / 1000)
var appKey = 'B1A44E7CEA0A6B78437092F4D8E6BD37' // www
axios.interceptors.request.use((config) => {
  var querry;
  if (config.method === "get") {
    querry = getRequest(config.url);
    querry = JSON.stringify(querry)
  } else {
    querry = config.data
  }
  // 拦截器处理token放在请求头上,有token才能登陆
  config.headers['sign'] = md5('timestamp' + timestamp + querry + appKey).toUpperCase()
  config.headers['timestamp'] = timestamp
  // config.headers['x-forwarded-for'] = returnCitySN["cip"]
  config.headers['Content-Type'] = 'application/json; charset=utf-8'
  return config
}, (error) => {
  return Promise.reject(error)
})
function getRequest (url) {
  var theRequest = new Object();
  if (url.indexOf("?") != -1) {
    var index = url.indexOf("?");
    var str = url.substring(index + 1);
    var strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
    }
  }
  return theRequest;
}
axios.interceptors.response.use(
  response => {
    if (response.status == 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  error => {
    Toast(error)
  }
);
export default {
  post (url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, data).then(res => {
        resolve(res.data)
      })
        .catch(err => {
          reject(err)
        });
    })
  },
  get (url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, { params }).then(res => {
        resolve(res.data)
      })
        .catch(err => {
          reject(err)
        })
    })
  },
  put (url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.put(url, data).then(res => {
        resolve(res.data)
      })
        .catch(err => {
          reject(err)
        });
    })
  },
};
