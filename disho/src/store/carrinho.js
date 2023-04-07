export default {
  state: {
    quanty: 1,
  },
  mutations: {
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
      context.state.quanty <= 1 ? (context.state.quanty = 1) : context.commit("mutationDeletCount", data);
    },
  },
};
