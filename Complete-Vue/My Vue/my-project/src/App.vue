<template>
  <div id="app">
      <my-header></my-header>
      <my-main></my-main>
  </div>
</template>

<script>

import MyHeader from './components/MyHeader.vue'
import Main from './components/main/Main.vue'

export default {
  name: 'app',
  data() {
    return {
      
    }
  },
  components: {
    myHeader: MyHeader,
    myMain: Main
  }
}
</script>

<style>

  * {
    margin:0;
    padding: 0;
    border: 0;
  }

    body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 62.5%;
    }

</style>
