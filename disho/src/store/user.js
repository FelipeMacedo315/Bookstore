export default {
  namespaced: true,
  state: {
    user: {
      name: "",
      email: "",
      password: "",
    },
  },
  getters: {
    value: (state) => {
      return state.value;
    },
  },
  mutations: {
    updateName(state, payload) {
      state.user.name = payload;
    },
    updateEmail(state, payload) {
      state.user.email = payload;
    },
    updatePassword(state, payload) {
      state.user.password = payload;
    },
  },
  actions: {
    checkName({ commit }, payload) {
      if (payload.length > 1) {
        commit("updateName", payload);
      } else {
        commit("updateName", "invalid");
      }
    },
    checkEmail({ commit }, payload) {
      if (
        payload.indexOf("@") !== -1 &&
        payload.indexOf("@") !== payload.length - 1 &&
        payload.indexOf("@") !== 0 &&
        payload.indexOf(".") !== payload.length - 1
      ) {
        commit("updateEmail", payload);
      } else if (payload === "") {
        commit("updateEmail", payload);
      } else {
        commit("updateEmail", "invalid");
      }
    },
    checkPassword({ commit }, payload) {
      if (payload.length >= 3) {
        commit("updatePassword", payload);
      } else if (payload === "") {
        commit("updatePassword", payload);
      } else {
        commit("updatePassword", "invalid");
      }
    },
  },
};
