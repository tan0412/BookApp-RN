import axios from 'axios'
import { API_BOOK_BASE_URL} from './constants'

const axiosClient = axios.create({
    baseURL: API_BOOK_BASE_URL,
   
    headers: {
        'content-type': 'application/json',
        },
   
})
axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    return config;
    })
    axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
    return response.data;
    }
    return response;
    }, (error) => {
    // Handle errors
    throw error;
    });
    export default axiosClient;
