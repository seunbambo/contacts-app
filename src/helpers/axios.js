import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;

console.log("BASE_URL: ", baseURL);
let headers = {};

if (localStorage.token) {
  headers.Authorizeation = `Bearer localStorage.token`;
}

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});

export default axiosInstance;
