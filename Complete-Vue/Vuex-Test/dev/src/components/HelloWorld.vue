<template>
  <div class="hello">
    <p>{{msg}}</p>
    <h1>{{myNum}}</h1>
    <input v-model="newNum" type="number">
    <button @click="changeNumHandler(newNum)">Add to numer</button>
    <button @click="dblChangeNumHandler(newNum)">Double Add to Number</button>
  </div>
</template>

<script>

import { mapState, mapMutations, mapActions } from 'vuex';

export default {

  name: "HelloWorld",
  data() {
    return {
      newNum: 0
    }
  },
  props: {
    
  },
  computed: {
    ...mapState({
      msg: 'msg',
      myNum: 'myNum'
    })
    

  },
  methods: {
    ...mapMutations({
      changeNum : 'CHANGE_MYNUM'
    }),
    ...mapActions([
      'changeNumDouble'
    ]),
    changeNumHandler(num) {
      const numberify = parseInt(num);
      console.log(numberify);
      this.changeNum(numberify);
    },
    dblChangeNumHandler(data) {
      data *= 2;
      this.changeNumDouble(data);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
