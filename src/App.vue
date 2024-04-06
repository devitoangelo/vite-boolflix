<script>
import { state } from './state'

export default {
  name: 'App',

  data() {
    return {
      state,
      language: ['it', 'en', 'fr', 'ja', 'zh', 'ru',],
      
    }
  },
  methods: {
    flag(lang) {
      if (this.language.includes(lang)) {
        return true;
      }
      return false;
    },
    //bandiere 

    // searchSeries(){
    //   console.log('ciao', state.search);
    //   const url = `${state.urlType + state.FilmSeries}?api_key=${state.api_key}&query=${state.search}`

    //   console.log(url);
    //   this.state.callApi(url);

    // }
    //creare l' Api per le serie tv 




    // searchText() {
    //   // console.log('ciao' , this.state.search);
    //   const url = `${state.urlType}?api_key=${state.api_key}&query=${state.search}`

    //   console.log(url);
    //   this.state.callApi(url)
    // }
    //ho passato la chiamata in state.js
  }
}

</script>

<template>

  <header>
    <input type="text" placeholder="cera film o serie TV" v-model="state.search" @keyup.enter="state.getResults()">
    <button @click="state.getResults()">search</button>
  </header>



  <section v-for="(film, type) in state.films">
    <h1>{{ type }}</h1>



    <div v-for="content in film.results">

      <!-- Titolo -->
      <h4>
        {{ content.title }}
        {{ content.name }}
      </h4>

      <!-- Original_name -->
      <h4>
        {{ content.original_title }}
        {{ content.original_name }}
      </h4>

      <!-- Flag -->
      <div v-if="flag(content.original_language)">
        <img width="20" :src="'/images/' + content.original_language + '.png'" alt="">
      </div>

      <div v-else>
        {{ content.original_language }}
      </div>

         <!-- Voto -->
      <div>
        {{ content.vote_average }}
      </div>


        <!-- Img -->
      <div>
        <img :src="'https://image.tmdb.org/t/p/w500/' + content.poster_path" alt="">

      </div>








    </div>





    <!-- serve solo per vedere i film a schermo  -->
  </section>


</template>



<style></style>