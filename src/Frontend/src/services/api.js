import axios from 'axios'
const api = axios.create({
    baseURL: 'https://fgc5kq-3001.csb.app/api',
});

export default api;