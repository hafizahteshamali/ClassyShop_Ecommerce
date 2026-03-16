import apiClient from "./request";

const getReq = async (path, config={})=>{
    try {
        const response = await apiClient.get(path, config)
        return response;
    } catch (error) {
        return error;
    }
}

const postReq = async (path, data, config={})=>{
    try {
        const response = await apiClient.post(path, data, config)
        return response;
    } catch (error) {
        return error;
    }
}

const deleteReq = async (path, config={})=>{
    try {
        const response = await apiClient.delete(path, config)
        return response;
    } catch (error) {
        return error;
    }
}

const putReq = async (path, data, config={})=>{
    try {
        const response = await apiClient.put(path, data, config)
        return response;
    } catch (error) {
        return error;
    }
}

export {getReq, postReq, deleteReq, putReq};