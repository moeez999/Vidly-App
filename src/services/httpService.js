import axios from "axios";
// import Raven from "raven-js";
import { toast } from "react-toastify";
import auth from "./authService";

axios.defaults.headers.common["x-auth-token"] = auth.getJwt();
console.log(axios.defaults.headers.common);

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
