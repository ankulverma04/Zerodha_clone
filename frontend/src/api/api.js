import axios from "axios";

export const BASE_URL = "http://localhost:3000";

export const api = axios.create({
  baseURL: BASE_URL,
});

export const setToken = (token) => {
  if (token) api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
