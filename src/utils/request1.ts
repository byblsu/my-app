import axios from 'axios'
import {message, Modal} from 'antd';
import NProgress from 'nprogress'
import {clear, get} from "./storage";


const request = axios.create({
    timeout: 15000,
});

request.interceptors.request.use((c) => {
    const token = sessionStorage.getItem("token");
    if (token) {
        c.headers = {
            ...c.headers,
            Authorization: `Bearer ${token}`,
        };
    }
    return c;
});

request.interceptors.response.use(
    (res) => {
        return res.data;
    },
    (e) => {
        message.error(e.response.data.message);
        return Promise.reject(e.response.data.message);
    }
);

export default request;

