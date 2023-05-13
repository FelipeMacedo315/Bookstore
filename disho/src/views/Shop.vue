<template>
  <main v-if="!this.products.length">
    <Loader />
  </main>
  <main v-else>
    <BreadCrumps>
      <a>Home </a>
      <a>|</a>
      <a>Shop</a>
    </BreadCrumps>
    <div class="container-sidebar-and-items-page">
      <SideBar
        v-on:closeSideBar="receiverCloseSideBar"
        v-show="handleSidebar"
        v-on:restartProducts="cancelFilter"
        v-on:filterCondicions="filterItems"
      />
      <div class="no-results" v-if="!products.length">
        <h1>
          Nenhum Produto encontrado. <br />
          Tente mudar os filtros
        </h1>
      </div>
      <div class="content" v-else>
        <div class="container-sorting">
          <select v-on:change="orderedBy">
            <option value="default">Default</option>
            <option value="high">High Price</option>
            <option value="low">Low Price</option>
          </select>
          <Circle v-on:click="handleSidebar = true" v-if="!handleSidebar" background="#ffffff" color="#264653" size="7vh">
            <fa icon="filter"></fa>
          </Circle>

          <p class="results">Showing 1-10 of {{ totalItems }} items</p>
        </div>
        <div class="container-products">
          <CardProduct
            v-for="items in products"
            v-bind:key="items._id"
            v-bind:name="items.name"
            v-bind:price="items.price"
            v-bind:img="items.image[0]"
            v-bind:id="items._id"
          />
        </div>
        <div class="pagination">
          <button
            v-for="(number, index) in totalPages"
            v-bind:key="index"
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
import { mapActions, mapState } from "vuex";
import store from "@/store";
import Circle from "../components/Circle.vue";
import Loader from "../components/Loader.vue";
export default {
  components: {
    Circle,
  },
  computed: {
    ...mapState(["products", "typeProduct", "currentPage", "totalPages", "totalItems"]),
    ...mapState("searchProduct", ["searchProduct"]),
    ...mapActions(["fetchProducts", "fetchFilterProducts"]),
  },
  watch: {
    // Monitorando quando os estados mudam
    typeProduct(current, old) {
      this.fetchProducts;
    },
    currentPage() {
      this.fetchProducts;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    if (window.screen.width < 760) {
      this.handleSidebar = false;
    }
    if (!this.searchProduct.length) {
      this.fetchProducts;
    }
    this.$store.dispatch("actionCurrentPage", 1);
  },

  data() {
    return {
      optionSort: "",
      btnStatus: false,
      handleSidebar: true,
    };
  },
  methods: {
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
      store.dispatch(
        "fetchFilterProducts",
        `https://disho.onrender.com/DishoApi/${this.typeProduct}/filter?&page=${this.currentPage}&nameItem=${valueOfChildreen.currentTag}&maxPrice=${valueOfChildreen.currentValue}`
      );
    },
    cancelFilter(valueofSideBar) {
      if (valueofSideBar) {
        store.dispatch("fetchProducts");
      } else {
        null;
      }
    },
    receiverCloseSideBar(valueChild) {
      this.handleSidebar = valueChild;
    },
  },
  components: {
    SideBar,
    CardProduct,
    BreadCrumps,
    Circle,
    Loader,
  },
};
</script>

<style lang="scss">
.container-sidebar-and-items-page {
  display: flex;
  column-gap: 5%;
  align-items: flex-start;
  margin: 5% 2%;
}
.content {
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
  align-items: center;
  select {
    font-family: PT-Sans-Regular;
    font-size: 1rem;
    color: var(--colorDisho);
    font-weight: 700;
    border-radius: 25px;
    border: solid 1px var(--grayLight);
    height: 7vh;
    padding-left: 15px;
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
@media (max-width: 768px) {
  .container-sidebar-and-items-page {
    flex-direction: column;
  }
  .container-sorting {
    justify-content: space-around;
  }
  .content {
    width: 100%;
  }
  .container-products {
    flex-direction: column;
  }
}
</style>
