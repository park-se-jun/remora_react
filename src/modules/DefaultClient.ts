import axios from "axios";

const baseURL = (() => {
    if (process.env.NODE_ENV === "development") {
        return "http://20.124.204.171:8080";
    }
    return "http://20.124.204.171:8080";
})();

export const formDataClient = axios.create({
    baseURL,
    headers: { "Content-Type": "multipart/form-data" },
});
export const jsonDataClient = axios.create({
    baseURL,
    headers: { "Content-Type": `application/json` },
});
