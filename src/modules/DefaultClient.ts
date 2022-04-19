import axios from "axios";

export const formDataClient = axios.create({
    headers: { "Content-Type": "multipart/form-data" },
    // maxBodyLength: Infinity,
});
export const jsonDataClient = axios.create({
    headers: { "Content-Type": `application/json` },
});
