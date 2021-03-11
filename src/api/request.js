import http from './http'

// 获取落地页信息
const getAdvInfo = (code, data) => {
  return http.get(
    `/adv/v1/landing/${code}`, data);
};

export {
  getAdvInfo
}