<template>
  <main class="page-shop">
    <SideBar />
    <div v-if="!products">
      <h1>carrgwando</h1>
    </div>
    <div class="principal" v-else>
      <div class="container-sorting">
        <select v-on:change="lowPrice">
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
  </main>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import CardProduct from "../components/CardProduct.vue";
import { mapActions, mapState, Store } from "vuex";
import store from "@/store";

export default {
  computed: { ...mapState(["products", "typeProduct", "currentPage", "totalPages", "totalItems"]) },
  watch: {
    typeProduct(current, old) {
      this.fetchProducts();
    },
    currentPage() {
      this.fetchProducts();
    },
  },
  mounted() {
    this.fetchProducts();
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
    fetchProducts() {
      fetch(
        `https://api-disho.up.railway.app/DishoApi/${this.typeProduct}?page=${this.currentPage}`
      )
        .then((response) => response.json())
        .then((data) => store.dispatch("productsAction", data));
    },
    lowPrice(value) {
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
  },
  components: {
    SideBar,
    CardProduct,
  },
};
</script>

<style lang="scss">
.page-shop {
  display: grid;
  grid-template-columns: 30% 60%;
  column-gap: 5%;
  align-items: flex-start;
  margin: 5% 2%;
}
.principal {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5vh;
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
</style>
