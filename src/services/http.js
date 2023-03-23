import axios from "axios";

const $api = axios.create({ baseURL: process.env.REACT_APP_LOCAL });
const $apiAuth = axios.create({ baseURL: process.env.REACT_APP_LOCAL });

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
}

$apiAuth.interceptors.request.use(authInterceptor);

export { $api, $apiAuth };