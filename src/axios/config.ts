import axios from "axios";

const api = axios.create({
  baseURL: "https://v1.alapi.cn/api",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
});

api.interceptors.request.use((config) => {
  //todo
  return config;
});

api.interceptors.response.use(
  (response) => {
    const responseData = response.data;
    if (responseData.code !== 200) return Promise.reject(responseData.message);
    return Promise.resolve(responseData.data);
  },
  (error) => {
    if (typeof error === "string") return Promise.reject(error);

    let message = "未知错误";
    if (error.response && error.response.data) {
      const responseData = error.response.data;
      message = responseData.message;
      const code = responseData.code;
    } else if (error.message) message = error.message;
    return Promise.reject(message);
  }
);

export default api;
