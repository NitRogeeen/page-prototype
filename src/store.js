import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    message: "あtest試験",
    scrollTop: 0
  },
  getters: {},
  mutations: {
    scrollTop(state, n) {
      state.scrollTop = n;
    }
  },
  actions: {}
});

export default store;
