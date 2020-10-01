import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '56c625c2053917bb0e5f6f00792c4c78'
    }
})