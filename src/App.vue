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
    // bandiere
  }
}

</script>

<template>
  <!-- header -->
  <header id="site_header">
    <!-- logo -->
    <div class="logo">
      <img style="margin: 1rem; ;" width="50px" src="/images/boolflix.png" alt="">

    </div>
    <!-- searchBar -->
    <div class="button">
      <input class="searchBar" type="text" placeholder="cera film o serie TV" v-model="state.search"
        @keyup.enter="state.getResults()">
      <button class="search" @click="state.getResults()">search</button>
    </div>
  </header>



  <section style="width: 90%; margin: auto;" class="Main_container" v-for="(film,) in state.films">
    <!-- <h1>{{ type }}</h1> -->



    <div style="margin: 3rem;" v-for="content in film.results">

      <!-- Img -->
      <div>
        <img  :src="'https://image.tmdb.org/t/p/w300/' + content.poster_path" alt="">
       
      </div>


      <!---- titolo -->
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


     
      <!-- star -->
      <span v-for="n in Math.ceil(content.vote_average / 2)" :key="n">
        <i class="fa-solid fa-star"></i>
      </span>


      <span v-for="n in 5 - Math.ceil(content.vote_average / 2)">
        <i class="fa-regular fa-star"></i>
      </span>


    </div>





    <!-- serve solo per vedere i film a schermo  -->
  </section>


</template>



<style></style>