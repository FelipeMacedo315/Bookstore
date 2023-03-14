<template>
  <main class="single-product">
    <BreadCrumps>
      <a>Home </a>
      <a>|</a>
      <a>Shop</a>
      <a>|</a>
      <a>{{ itemName }}</a>
    </BreadCrumps>
    <div class="product-gallery">
      <div v-for="(element, indexEl) in item" class="images-product">
        <img class="main-image" v-bind:src="element.image[0]" alt="" />
        <section class="common-container-image">
          <img
            v-for="(commonImages, index) in element.image.slice(1)"
            class="common-image"
            v-bind:src="commonImages"
            v-bind:alt="commonImages"
          />
        </section>
      </div>
      <div v-for="(element, index) in item" class="info">
        <h2 class="logo">{{ element.name }}</h2>
        <p class="price">${{ element.price }}</p>
        <span>*Price for a Kg</span>
        <div class="quanty-container">
          <div class="input-simulator">{{ quanty }}</div>
          <button><fa icon="plus"></fa></button>
          <button><fa icon="minus"></fa></button>
          <button><fa icon="heart"></fa></button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import BreadCrumps from "../components/BreadCrumps.vue";
export default {
  components: {
    BreadCrumps,
  },
  computed: { ...mapState(["products"]) },
  mounted() {
    this.singleProduct();
    window.scrollTo(0, 0);
  },

  data() {
    return {
      item: "",
      quanty: 1,
      itemName: "",
    };
  },
  methods: {
    singleProduct() {
      const checkItem = this.products.filter((item) => {
        return item._id === this.$route.params.id;
      });

      this.item = checkItem;
      this.itemName = checkItem[0].name;
    },
  },
};
</script>

<style lang="scss">
.single-product {
  display: flex;
  flex-direction: column;
  gap: 5vh;
}
.product-gallery {
  display: flex;
  justify-content: center;
}
.images-product {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vh;
}
.main-image {
  height: 60vh;
  width: 100%;
}
.common-container-image {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.common-image {
  height: 20vh;
  width: 30%;
}
img {
  object-fit: fill;
  border-radius: 12px;
}
.info {
  width: 20%;
  margin-left: 4%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h2 {
    padding-bottom: 5%;
  }
  p {
    font-size: 1.5rem;
    padding-bottom: 6%;
  }
  span {
    color: var(--colorText);
    font-weight: 700;
    font-family: "PT-Sans-Regular";
  }
}
.quanty-container {
  display: flex;
  width: 100%;
  button {
    background-color: white;
    padding: 1rem;
    border-radius: 50%;
    border: none;
    box-shadow: 2px 2px 0px 0px var(--grayLight);
    margin-left: 1%;
  }
}
.input-simulator {
  padding: 2vh 10vh;
  background-color: white;
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;
  border: none;
}
</style>
