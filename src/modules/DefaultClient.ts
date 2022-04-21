import axios from "axios";

const baseURL = "http://20.231.32.80:8080";
export const formDataClient = axios.create({
    baseURL,
    headers: { "Content-Type": "multipart/form-data" },
    // maxBodyLength: Infinity,
});
export const jsonDataClient = axios.create({
    baseURL,
    headers: { "Content-Type": `application/json` },
});
