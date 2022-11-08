import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.delete["Content-Type"] = "application/json";
axios.defaults.headers.put["Content-Type"] = "application/json";
axios.defaults.headers.get["Content-Type"] = "application/json";

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
