import axios from "axios"

export const getCallBookList = () => {
    axios.get('https://api.itbook.store/1.0/new') 
        .then((res) => console.log(JSON.stringify(res.data)))
}