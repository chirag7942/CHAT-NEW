import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-new.onrender.com/api",
  withCredentials: true,
});
