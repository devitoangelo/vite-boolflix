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
<input type="text" v-model="state.search">
<button @click="searchText()">search</button>

</header>




</template>



<style></style>