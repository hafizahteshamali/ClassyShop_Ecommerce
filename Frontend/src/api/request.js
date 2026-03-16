import axios from "axios";
import { toast } from "react-toastify";

const apiClient = axios.create({
    baseURL: "http://localhost:8050/api/",
    timeout: 30000
})

apiClient.interceptors.request.use((config)=>{
    const token = sessionStorage.getItem("token");
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error)=>{
    Promise.reject(error)
})

apiClient.interceptors.response.use((response)=>{
    if(response.data.success && response.data.message){
        toast.success(response.data.message);
    }
    return response.data;
}, (error)=>{
    const status = error.response.status;
    const message = error.response?.data.message || error.message || "something went wrong";
    toast.error(message);
    if(status === 401){
        sessionStorage.removeItem("token");
        window.location.href="/login";
    }
    Promise.reject(error);
})

export default apiClient;