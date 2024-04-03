<script>
import { state } from './state'

export default {

  data() {
    return {
      state
    }
  },
  mounted() {
    // console.log(state);
    // this.state.films

    this.state.getFilms(this.state.urlType)



  }
}

</script>

<template>

  <h1>questo è il mio messaggio : {{ state.message }}</h1>





</template>



<style></style>