import axios from "axios";

export const baseApi = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
  headers: {
    token: `${import.meta.env.VITE_TOKEN}`,
  },
});
