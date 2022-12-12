import axios from "axios"
import axiosClient from "./axiosClient";

const bookApi = {
    getApiBook() {
        const url = '/new';
        return axiosClient.get(url)
    },
    getApiBookDetail(id: string) {
        const url = `/books/${id}`;
        return axiosClient.get(url)
    }
}

export default bookApi