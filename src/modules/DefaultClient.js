import axios from "axios";

const baseURL = (() => {
    if (process.env.NODE_ENV === "development") {
        return "http://20.124.204.171:8080";
    }
<<<<<<< HEAD
    return "http://20.124.204.171:8080";
=======
    return "http://cors-anywhere.herokuapp.com/http://20.124.204.171:8080";
>>>>>>> develop
})();

const defaultClient = axios.create({
    baseURL,
    headers: { "Content-Type": "multipart/form-data" },
});
export default defaultClient;
