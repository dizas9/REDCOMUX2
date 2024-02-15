import axios from "axios";

const API_URL = " http://192.168.56.1:5173";

const axiosInstance = axios.create({
  baseURL: `${API_URL}/api`,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    return Promise.reject(error);
  }
);

const httpService = {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
};

export default httpService;
