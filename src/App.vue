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
      //continuare con lo screen
    },





    searchText() {
      // console.log('ciao' , this.state.search);
      const url = `${state.urlType}?api_key=${state.api_key}&query=${state.search}`

      console.log(url);
      this.state.callApi(url)
    }
  }
}

</script>

<template>

  <header>
    <input type="text" placeholder="cera film o serie TV" v-model="state.search">
    <button @click="searchText()">search</button>
  </header>


  <ul v-for="film in state.films">
    <li> Titolo originale : {{ film.original_title }}</li>

    <div v-if="flag(film.original_language)">
      <img width="20" :src="'/images/' + film.original_language + '.png'" alt="">
    </div>
    <p v-else>
      Lingua ufficiale: {{ film.original_language }}
    </p>

    <!-- <li> Lingua ufficiale: {{ film.original_language }}</li> -->
    <li> Titolo : {{ film.title }}</li>
    <li> Voto film : {{ film.vote_average }}</li>
    <!-- serve solo per vedere i film a schermo  -->
  </ul>


</template>



<style></style>