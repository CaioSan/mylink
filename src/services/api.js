import axios from "axios";

export const key = "75f54af4969420342755c0d26f61688fcf10e9ac"


const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: { 
        'Authorization': `Bearer ${key}`
    }
})

export default api;
//


