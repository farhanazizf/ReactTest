import axios from "axios";

const configs = {
  baseURL: "https://api.github.com",
};

const http = axios.create(configs);

export default http;
