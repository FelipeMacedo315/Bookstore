import { createStore } from "vuex";

export default createStore({
  state: {
    healthNotices: "",
  },
  getters: {},
  mutations: {
    handleState(state, data) {
      state.healthNotices = data;
    },
  },
  actions: {
    healthAction(context, data) {
      const news = data.results.slice(0, 3);
      //format date
      data.results.forEach((element) => {
        element.pubDate =
          element.pubDate.slice(8, 10) +
          "/" +
          element.pubDate.slice(5, 7) +
          "/" +
          element.pubDate.slice(0, 4);
      });
      context.commit("handleState", news);
    },
  },
  modules: {},
});
