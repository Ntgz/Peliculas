import axios from "axios";


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'96d42d4498ec254b360834808c2c637a',
        language: 'es-ES'
    }
})

export default movieDB;