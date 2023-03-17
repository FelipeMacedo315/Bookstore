export default {
  state: {
    produtos: [],
    quanty: 1,
  },
  mutations: {
    mutationAddCarrinho(state, data) {
      state.produtos = data;
      console.log(state.produtos);
    },
    mutationAddCount(state, data) {
      state.quanty = state.quanty + data;
    },
    mutationDeletCount(state, data) {
      state.quanty = state.quanty - data;
    },
  },
  actions: {
    actionAddCarrinho(context, data) {
      context.commit("mutationAddCarrinho", data);
    },
    actionAddCount(context, data) {
      context.commit("mutationAddCount", data);
    },
    actionDeletCount(context, data) {
      context.commit("mutationDeletCount", data);
    },
  },
};
