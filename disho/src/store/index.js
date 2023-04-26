import { createStore } from "vuex";
import carrinho from "./carrinho";
import user from "./user";
import searchProduct from "./searchProduct";
import axios from "axios";
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
      if (state.healthNotices.length) {
        return state.healthNotices.slice(0, 3);
      } else {
        return "Nenhuma noticia encontrada";
      }
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
    async fetchProducts(context, payload) {
      const fetchItems = await axios.get(
        `https://disho.onrender.com/DishoApi/${context.state.typeProduct}?&page=${context.state.currentPage}`
      );
      const resultsFetch = fetchItems.data;
      //ordena os items do array em um padrão
      resultsFetch.products.sort((a, b) => b.name.length - a.name.length);
      context.commit("handleProducts", resultsFetch.products);
      context.commit("handleTotalItems", resultsFetch.totalItems);
      context.commit("handleTotalPages", resultsFetch.nextPage);
    },
    async fetchFilterProducts(context, payload) {
      console.log(payload);
      const fetchItems = await axios.get(payload);
      const resultsFetch = fetchItems.data;
      console.log(resultsFetch);
      context.commit("handleProducts", resultsFetch.products);
      context.commit("handleTotalItems", resultsFetch.totalItems);
      context.commit("handleTotalPages", resultsFetch.nextPage);
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
        element.description === null ? (element.description = "nenhum") : null;
      });
      context.commit("handleState", data);
    },
  },
  modules: {
    carrinho,
    user,
    searchProduct,
  },
});
