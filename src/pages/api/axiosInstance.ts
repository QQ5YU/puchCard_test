import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});


// axiosInstance.interceptors.request.use(
//   function (config) {
//     config.headers.Authorization = accessToken;
//     return config;
//   },
//   function (err) {
//     return Promise.reject(err);
//   }
// );

export default axiosInstance;
