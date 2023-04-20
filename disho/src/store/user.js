export default {
  namespaced: true,
  state: {
    user: {
      name: "",
      email: "",
      password: "",
    },
    showModal: false,
    galleryVisible: false,
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
    mutOpenModal(state, payload) {
      state.showModal = payload;
    },
    mutGalleryVisible(state, payload) {
      state.galleryVisible = payload;
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
    actOpenModal({ commit }, payload) {
      commit("mutOpenModal", payload);
    },
    actGalleryVisible({ commit }, payload) {
      commit("mutGalleryVisible", payload);
    },
  },
};
