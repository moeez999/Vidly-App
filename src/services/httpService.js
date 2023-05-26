import axios from "axios";
// import Raven from "raven-js";
import { toast } from "react-toastify";

// // Add a request interceptor
// axios.interceptors.request.use(
//   function (config) {
//     const token = localStorage.getItem("access-token");

//     if (token) {
//       config.headers["x-auth-token"] = token;
//     }
//     // Do something before request is sent
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

axios.interceptors.response.use(null, (error) => {
  const expecdtedError =
    error.response &&
    error.response.state >= 400 &&
    error.response.status < 500;
  if (!expecdtedError) return Promise.reject(error);
  {
    // Raven.captureException(error);
    console.log("Logging The Error", error);
    toast.error("Unexpected Error Occured");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
