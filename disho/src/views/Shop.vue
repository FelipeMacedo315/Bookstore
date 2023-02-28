<template>
  <main class="page-shop">
    <SideBar />
    <div v-if="!products">
      <h1>carrgwando</h1>
    </div>
    <div class="items" v-else>
      <component v-for="(items, index) in products">
        <CardProduct
          v-bind:name="items.name"
          v-bind:price="items.price"
          v-bind:img="items.image[0]"
        />
      </component>
    </div>
  </main>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import CardProduct from "../components/CardProduct.vue";
import { mapActions, mapState } from "vuex";
import store from "@/store";

export default {
  computed: { ...mapState(["products", "typeProduct"]) },
  watch: {
    typeProduct(current, old) {
      this.fetchProducts();
    },
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      fetch(`https://api-disho.up.railway.app/DishoApi/${this.typeProduct}`)
        .then((response) => response.json())
        .then((result) => result)
        .then((data) => store.dispatch("productsAction", data));
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
.items {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  row-gap: 4vh;
}
</style>
