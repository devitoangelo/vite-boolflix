<script>
import { state } from './state'

export default {
  name: 'App',

  data() {
    return {
      state
    }
  },
  methods: {
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
    <li> Lingua ufficiale: {{ film.original_language }}</li>
    <li> Titolo : {{ film.title }}</li>
    <li> Voto film : {{ film.vote_average }}</li>
    <!-- serve solo per vedere i film a schermo  -->
  </ul>


</template>



<style></style>