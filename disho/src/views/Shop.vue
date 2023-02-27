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
          v-bind:img="items.image[1]"
        />
      </component>
    </div>
  </main>
</template>

<script>
import store from "@/store";
import SideBar from "../components/SideBar.vue";
import CardProduct from "../components/CardProduct.vue";
import { mapState } from "vuex";

export default {
  mounted() {
    const fetchProducts = fetch("https://api-disho.up.railway.app/fruits")
      .then((response) => response.json())
      .then((result) => result)
      .then((data) => store.dispatch("productsAction", data));
  },
  computed: { ...mapState(["products"]) },
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
