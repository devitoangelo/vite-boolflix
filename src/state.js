import { reactive } from "vue";
import axios from "axios";

export const state = reactive({

    message: 'messaggio prova state',
    urlType: 'https://api.themoviedb.org/3/',
    FilmMovie: 'search/movie',
    FilmSeries: 'search/tv',
    api_key: '2df89758a34ce45fc10402fa4da73b3a&',
    films: [],
    search: '',


    callApi(url){
        axios.get(url)
        .then(resp => {
            console.log(resp);
            this.films = resp.data.results
        })
        .catch(err => {
            console.log(err);
        })


    }






})