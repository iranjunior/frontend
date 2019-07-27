import Axios from "axios";
export const config = {
    headers: {
        "Authorization":`Bearer ${localStorage.getItem('token')}` 
    }
} 
const api = Axios.create({
    baseURL: "http://127.0.0.1:3333/",
    timeout: 10000,
});

export default api;