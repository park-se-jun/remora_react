import axios from "axios";

const baseURL = (() => {
    if (process.env.NODE_ENV === "development") {
        return "http://20.124.204.171:8080";
    }
    return "/";
})();

const defaultClient = axios.create({
    baseURL,
    headers: { "Content-Type": "multipart/form-data" },
});
defaultClient.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

defaultClient.interceptors.response.use(
    response => {
        // 응답 인터셉터
        return response;
    },
    error => {
        return Promise.reject(error);
    },
);
export default defaultClient;
