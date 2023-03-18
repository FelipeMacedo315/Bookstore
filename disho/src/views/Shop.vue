<template>
  <main class="all-page">
    <BreadCrumps>
      <a>Home </a>
      <a>|</a>
      <a>Shop</a>
    </BreadCrumps>
    <div class="container-sidebar-and-items-page">
      <SideBar v-on:restartProducts="cancelFilter" v-on:filterCondicions="filterItems" />
      <div class="no-results" v-if="!products.length">
        <h1>
          Nenhum Produto encontrado. <br />
          Tente mudar os filtros
        </h1>
      </div>
      <div class="principal" v-else>
        <div class="container-sorting">
          <select v-on:change="orderedBy">
            <option value="default">Default</option>
            <option value="high">High Price</option>
            <option value="low">Low Price</option>
          </select>

          <p class="results">Showing 1-10 of {{ totalItems }} items</p>
        </div>
        <div class="container-products">
          <component v-for="(items, index) in products">
            <CardProduct
              v-bind:name="items.name"
              v-bind:price="items.price"
              v-bind:img="items.image[0]"
              v-bind:id="items._id"
            />
          </component>
        </div>
        <div class="pagination">
          <button
            v-for="number in totalPages"
            v-on:click="changeStatusBtn(number)"
            v-bind:class="{
              btnGreen: number === currentPage ? true : false,
              btnWhite: number === currentPage ? false : true,
            }"
          >
            {{ number }}
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import CardProduct from "../components/CardProduct.vue";
import BreadCrumps from "../components/BreadCrumps.vue";
import { mapActions, mapState, Store } from "vuex";
import store from "@/store";

export default {
  computed: { ...mapState(["products", "typeProduct", "currentPage", "totalPages", "totalItems"]) },
  watch: {
    typeProduct(current, old) {
      this.fetchProducts(
        `https://api-disho.up.railway.app/DishoApi/${this.typeProduct}?page=${this.currentPage}`
      );
    },
    currentPage() {
      this.fetchProducts(
        `https://api-disho.up.railway.app/DishoApi/${this.typeProduct}?page=${this.currentPage}`
      );
    },
  },
  mounted() {
    this.fetchProducts(
      `https://api-disho.up.railway.app/DishoApi/${this.typeProduct}?page=${this.currentPage}`
    );
    this.$store.dispatch("actionCurrentPage", 1);
  },
  data() {
    return {
      optionSort: "",
      btnStatus: false,
      btnA: true,
      btnG: false,
    };
  },
  methods: {
    fetchProducts(urlDefault) {
      fetch(urlDefault)
        .then((response) => response.json())
        .then((data) => store.dispatch("productsAction", data))
        .catch((err) => console.log(err));
    },
    orderedBy(value) {
      this.optionSort = value.target.value;
      switch (this.optionSort) {
        case "default":
          this.products.sort((a, b) => b.name.length - a.name.length);
          break;
        case "high":
          this.products.sort((a, b) => b.price - a.price);
          break;
        case "low":
          this.products.sort((a, b) => a.price - b.price);
          break;
      }
    },
    changeStatusBtn(btnValue) {
      store.dispatch("actionCurrentPage", btnValue);
      window.scrollTo(0, 0);
    },
    filterItems(valueOfChildreen) {
      this.fetchProducts(
        "https://api-disho.up.railway.app/DishoApi/" +
          this.typeProduct +
          "/filter?page=" +
          this.currentPage +
          "&" +
          "nameItem=" +
          valueOfChildreen.currentTag +
          "&" +
          "maxPrice=" +
          valueOfChildreen.currentValue
      );
    },
    cancelFilter(valueChildreen) {
      if (valueChildreen) {
        this.fetchProducts(
          `https://api-disho.up.railway.app/DishoApi/${this.typeProduct}?page=${this.currentPage}`
        );
      } else {
        null;
      }
    },
  },
  components: {
    SideBar,
    CardProduct,
    BreadCrumps,
  },
};
</script>

<style lang="scss">
.all-page {
  display: flex;
  flex-direction: column;
}
.container-sidebar-and-items-page {
  display: flex;
  column-gap: 5%;
  align-items: flex-start;
  margin: 5% 2%;
}
.principal {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5vh;
  grid-area: items;
  width: 60%;
}
.container-sorting {
  display: flex;
  width: 100%;
  justify-content: space-between;

  select {
    font-family: PT-Sans-Regular;
    font-size: 1rem;
    color: var(--colorDisho);
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 20px;
    border: solid 1px var(--grayLight);
  }

  p {
    font-family: PT-Sans-Regular;
    font-size: 1rem;
    color: var(--colorText);
    font-weight: 400;
  }
}
.container-products {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 6vh;
  column-gap: 5vh;
}

.pagination {
  margin-top: 10%;
  width: 100%;
  padding-top: 5%;
  border-top: 1px solid var(--grayLight);
}

.btnGreen {
  border: none;
  padding: 1.5vh 1.7vh;
  background-color: var(--colorBtn);
  color: var(--colorWhite);
  font-size: 1rem;
  border-radius: 4px;
  font-family: "PT-Sans-Regular";
  font-weight: 700;
  margin-left: 0.5vw;
}
.btnWhite {
  border: none;
  padding: 1.5vh 1.7vh;
  background-color: var(--colorWhite);
  color: var(--colorDisho);
  font-size: 1rem;
  border-radius: 4px;
  font-family: "PT-Sans-Regular";
  font-weight: 700;
  margin-left: 0.5vw;
}
.no-results {
  height: 100%;
  display: flex;
  padding-top: 10%;
  justify-content: center;
  width: 60%;
  h1 {
    color: var(--colorDisho);
    font-size: 3rem;
    font-family: viga;
  }
}
</style>
