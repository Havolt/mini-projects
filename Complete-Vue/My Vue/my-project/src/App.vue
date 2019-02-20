<template>
  <div id="app">
      <my-header></my-header>
  </div>
</template>

<script>

import MyHeader from './components/MyHeader.vue'

export default {
  name: 'app',
  data() {
    return {
      
    }
  },
  components: {
    myHeader: MyHeader
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
