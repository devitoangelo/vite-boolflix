import { reactive } from "vue";
import axios from "axios";

export const state = reactive({

    message: 'messaggio prova state',
    films: [],
    urlType: 'https://api.themoviedb.org/3/search/movie?api_key=2df89758a34ce45fc10402fa4da73b3a&query=ritorno al futuro',


    getFilms(url){

        axios.get(url)
        .then(response => {


            console.log(response);
            
            this.films = response.data.results
        
        })
  


    }







})