<template>
  <div id="app">

    <main-header></main-header>

    <router-view />

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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
