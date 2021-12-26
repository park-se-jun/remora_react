import axios from "axios";

const baseURL = (() => {
    if (process.env.NODE_ENV === "development") {
        return "http://20.124.204.171:8080";
    }
    return "/";
})();

let progress = 0;
let timerId = null;
function setProgress(value) {
    progress = value;
}
function timer() {
    if (progress < 98) {
        const diff = 100 - progress;
        const inc = diff / (10 + progress * (1 + progress / 100));
        setProgress(progress + inc);
    }
    timerId = setTimeout(timer, 50);
}
const defaultClient = axios.create({
    baseURL,
    headers: { "Content-Type": "multipart/form-data" },
});
defaultClient.interceptors.request.use(
    config => {
        setProgress(0);
        timer();
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

defaultClient.interceptors.response.use(
    response => {
        // 응답 인터셉터
        if (timerId) {
            clearTimeout(timerId);
            timerId = null;
        }
        setProgress(100);
        return response;
    },
    error => {
        return Promise.reject(error);
    },
);
export default defaultClient;
