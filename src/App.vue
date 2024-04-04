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
      console.log('ciao' , this.state.search);
  
    }
  }
}

</script>

<template>

<header>
<input type="text" v-model="state.search">
<button @click="searchText()">search</button>

</header>




</template>



<style></style>