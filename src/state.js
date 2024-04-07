import { reactive } from "vue";
import axios from "axios";

export const state = reactive({

    message: 'messaggio prova state',
    urlType: 'https://api.themoviedb.org/3/',
    FilmMovie: 'search/movie',
    FilmSeries: 'search/tv',
    api_key: '2df89758a34ce45fc10402fa4da73b3a&',
    search: '',
    films: {
        movies: {

        },
        TvSeries: {

        }
    },




    MovieTv() {
        const url = `${this.urlType + this.FilmMovie}?api_key=${this.api_key}&query=${this.search}`
        return axios.get(url)

    },
// chiamata per i films

    Series() {
        const url = `${this.urlType + this.FilmSeries}?api_key=${this.api_key}&query=${this.search}`
        return axios.get(url)

    },

// chiamata per le serie tv

    getResults() {

        Promise
            .all([this.MovieTv(), this.Series()])
            .then(([movies, shows]) => {
                console.log(movies, shows);
                this.films.movies = movies.data
                this.films.TvSeries = shows.data
            })
 // pusho nell'array le mie chiamate 
    }






    // callApi(url){
    //     axios.get(url)
    //     .then(resp => {
    //         console.log(resp);
    //         this.films = resp.data.results
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })


    // }






})