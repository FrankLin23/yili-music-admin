import axios from "axios";
import store from "../store";
import notify from "../utils/notify.js";

const baseURL = import.meta.env.VITE_API_HOST;
const tokenPrefix = "Bearer ";

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  (config) => {
    if (store.state.user.token) {
      config.headers["Authorization"] = tokenPrefix + store.state.user.token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.data.code) {
      handleErrorResponse(response);
      return Promise.reject(response.data);
    }
    return response.data;
  },
  (error) => {
    if (!error.response) {
      notify.error("请求不成功，请联系后台管理员");
    }
    handleErrorResponse(error.response);
    return Promise.reject(error);
  }
);

const handleErrorResponse = (response) => {
  if (response.status === 401 || response.status === 403) {
  }
};

const { get, post, put } = instance;

export { get, post, put };
