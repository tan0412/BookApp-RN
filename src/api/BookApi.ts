import axios from "axios"
import axiosClient from "./axiosClient";

const bookApi = {
    getApiBook() {
        const url = '/volumes?q=inauthor:keyes&key=AIzaSyD6K7i8WmIDcmV0pKnO6oDliKRF6X3tpTk';
        return axiosClient.get(url)
    },
    getApiBookDetail(id: string) {
        const url = `/books/${id}`;
        return axiosClient.get(url)
    }
}

export default bookApi