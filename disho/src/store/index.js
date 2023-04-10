import { createStore } from "vuex";
import carrinho from "./carrinho";
import user from "./user";

export default createStore({
  state: {
    healthNotices: "",
    products: [],
    typeProduct: "fruits",
    currentPage: 1,
    totalPages: 1,
    totalItems: "",
  },
  getters: {
    first3Notice(state) {
      return state.healthNotices.slice(0, 3);
    },
  },
  mutations: {
    handleState(state, data) {
      console.log(data);
      state.healthNotices = data;
    },
    handleProducts(state, data) {
      state.products = data;
    },
    handleStateType(state, data) {
      state.typeProduct = data;
    },
    handleTotalItems(state, data) {
      state.totalItems = data;
    },
    handleTotalPages(state, data) {
      state.totalPages = data;
    },
    mutationCurrentPage(state, data) {
      state.currentPage = data;
    },
  },
  actions: {
    productsAction(context, data) {
      //ordena os items do array em um padrão
      data.products.sort((a, b) => b.name.length - a.name.length);
      context.commit("handleProducts", data.products);
      context.commit("handleTotalItems", data.totalItems);
      context.commit("handleTotalPages", data.nextPage);
      console.log(data);
    },
    navigate(context, data) {
      context.commit("handleStateType", data);
    },

    actionCurrentPage(context, data) {
      context.commit("mutationCurrentPage", data);
    },
    productsFilter(context, data) {
      context.commit("handleProducts", data);
    },
    healthAction(context, data) {
      //format date
      data.forEach((element) => {
        element.pubDate = element.pubDate.slice(8, 10) + "/" + element.pubDate.slice(5, 7) + "/" + element.pubDate.slice(0, 4);
      });
      console.log(data);
      context.commit("handleState", data);
    },
  },
  modules: {
    carrinho,
    user,
  },
});
