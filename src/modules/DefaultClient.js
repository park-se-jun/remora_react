import axios from "axios";

const baseURL = (() => {
    if (process.env.NODE_ENV === "development") {
        return "http://cors-anywhere.herokuapp.com/http://20.124.204.171:8080";
    }
    return "http://20.124.204.171:8080";
})();

const defaultClient = axios.create({
    baseURL,
    headers: { "Content-Type": "multipart/form-data" },
});
export default defaultClient;
