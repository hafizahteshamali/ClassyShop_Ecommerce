import axios from "axios";
import { toast } from "react-toastify";

const apiClient = axios.create({
    baseURL: "https://classy-shop-ecommerce.vercel.app/api/",
    timeout: 30000,
    withCredentials: true // 🔥 cookie send/receive ke liye zaruri
});

// 🔥 Request interceptor (ab token manually bhejne ki zarurat nahi)
apiClient.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

apiClient.interceptors.response.use(
    (response) => {
        // optional success toast
        if (response?.data?.success && response?.data?.message) {
            toast.success(response.data.message);
        }
        return response.data;
    },
    (error) => {
        const status = error?.response?.status;
        const message =
            error?.response?.data?.message ||
            error.message ||
            "Something went wrong";

        toast.error(message);

        return Promise.reject(error);
    }
);

export default apiClient;