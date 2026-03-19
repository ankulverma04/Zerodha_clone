import axios from "axios";

// Vercel environment variable se base URL lo
export const BASE_URL = "https://zerodha-clone-29if.onrender.com"

export const api = axios.create({
  baseURL: BASE_URL,
});

export const setToken = (token) => {
  if (token) api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};