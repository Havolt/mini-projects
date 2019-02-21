<template>
  <div id="app">

    <main-header></main-header>

    <div class="main-cont">
      <router-view />
    </div>

    <main-footer></main-footer>


  </div>
</template>

<script>

import MainHeader from "./components/header/MainHeader.vue";
import MainFooter from "./components/footer/MainFooter.vue";

export default {
    data() {
      return {

      }
    },
    components: {
      mainHeader: MainHeader,
      mainFooter: MainFooter
    }
};
</script>

<style>

* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}


#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-cont {
  min-height: calc(100vh - 10em);
}

</style>
