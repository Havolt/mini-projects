<template>
  <div class="hello">
    <p>{{msg}}</p>
    <h1>{{myNum}}</h1>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {

  name: "HelloWorld",
  props: {
    
  },
  computed: {
    ...mapState({
      msg: 'msg',
      myNum: 'myNum'
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
