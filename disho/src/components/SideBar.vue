<template>
  <div class="sidebar">
    <h1>Shop Products</h1>
    <div class="divider-title"></div>

    <div class="filter">
      <h1 class="filter-title">Product Filters</h1>
      <div class="categories">
        <h2>Categories:</h2>
        <div class="divider-categories"></div>
        <ul>
          <li v-on:click="changeCategory('fruits')">
            <img src="../assets/fruit.png" alt="" />
            <span> Fruits </span>
          </li>
          <li v-on:click="changeCategory('vegetables')">
            <img src="../assets/vegetable.png" alt="" />
            <span> Vegetables </span>
          </li>
          <li v-on:click="changeCategory('cereals')">
            <img src="../assets/coffee-cup.png" alt="" />
            <span>Cereals </span>
          </li>
        </ul>
        <h2>Price Range:</h2>
        <div class="divider-price-range"></div>
        <input type="range" />
        <p>Price: $0 - $30</p>

        <h2>Produtcs Tags:</h2>
        <div class="divider-categories"></div>
        <div class="tags">
          <span>Banana</span>
          <span>Abacaxi</span>
          <span>Melancia</span>
          <span>Uva</span>
          <span>Laranja</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { mapActions } from "vuex";
export default {
  computed: { ...mapActions["navigate"] },
  methods: {
    changeCategory(value) {
      store.dispatch("navigate", value);
    },
  },
};
</script>

<style lang="scss">
.sidebar {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 5%;
}
.divider-title {
  margin: 3vh 0vh 8vh 0vh;
  width: 25%;
  height: 0.3rem;
  background-color: var(--colorBtn);
}
.divider-categories {
  margin: 0vh 0vh 2vh 0vh;
  width: 25%;
  height: 0.3rem;
  background-color: #fec740;
}
.divider-price-range {
  margin: 0vh 0vh 2vh 0vh;
  width: 25%;
  height: 0.3rem;
  background-color: var(--colorBtn);
}
.filter {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.filter-title {
  font-size: 1.6rem;
  font-weight: 400;
  background-color: var(--colorBtn);
  font-family: viga;
  color: var(--colorWhite);
  padding: 2% 4%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.categories {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 0% 15% 10% 5%;
  background-color: var(--colorWhite);
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  h2 {
    margin-top: 15%;
  }
  li {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 50%;
    margin-top: 10%;
    span {
      font-family: PT-Sans-Regular;
      font-size: 1rem;
      color: var(--colorText);
      font-weight: 700;
    }
    img {
      height: 4vh;
    }
  }
}
input[type="range"] {
  width: 100%;
}

.tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  row-gap: 2vh;
  span {
    border: solid 1px var(--grayLight);
    border-radius: 15px;
    font-size: 0.8rem;
    color: var(--colorDisho);
    font-weight: 700;
    padding: 2% 4%;
  }
}
</style>
