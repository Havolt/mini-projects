import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    msg: "Here we go!",
    myNum: 532
  },
  mutations: {
    CHANGE_MYNUM(state, data) {
      state.myNum += data;
    }
  },
  actions: {
    changeNumDouble(context, data) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('CHANGE_MYNUM', data);
        }, 800);
      });
    }
  }
});
