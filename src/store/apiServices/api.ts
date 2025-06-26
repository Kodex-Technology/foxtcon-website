import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        const status = error.response.status;
        if (status === 401) {
          if (window.location.pathname !== "/superadmin/signin") {
            Cookies.remove("token");
            window.location.href = "/superadmin/signin";
          }
        }
      } else if (error.request) {
        console.error("No response from the server:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
    } else {
      console.error("Unexpected error:", error);
    }
    return Promise.reject(error);
  },
);

export default api;
