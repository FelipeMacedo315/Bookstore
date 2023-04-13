export default {
  namespaced: true,
  state: {
    searchProduct: "",
  },
  getters: {},
  mutations: {
    updateSearch(state, payload) {
      state.searchProduct = payload;
    },
  },
  actions: {
    updateSearch({ commit }, payload) {
      commit("updateSearch", payload);
    },
  },
};
