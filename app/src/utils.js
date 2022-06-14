import axios from "axios";

export const client = axios.create({
    baseURL: "http://app-provider:8000",
    timeout: 1000,
    headers: {'Authorization': 'Token e6c9d999b67f12ef9a94fd7c610852d949703627'},
});
