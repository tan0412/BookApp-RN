import axios from "axios"
import axiosClient from "./axiosClient";

const bookApi = {
    getApiBook() {
        const url = '/new';
        return axiosClient.get(url)
    }
   
}

export default bookApi