import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-new-1.onrender.com",
  withCredentials: true,
});
