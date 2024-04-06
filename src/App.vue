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


  
  <section v-for="(film,type) in state.films">
    <h2>{{ type }}</h2>

    {{ film }}

    <!-- serve solo per vedere i film a schermo  -->
  </section>


</template>



<style></style>