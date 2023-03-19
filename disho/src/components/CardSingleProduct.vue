<template>
  <div>
    <div v-if="product" class="product-gallery">
      <div class="images-product">
        <img
          v-on:click="galeryVisible = true"
          class="main-image"
          v-bind:src="product.image[0]"
          alt=""
        />
        <section class="common-container-images">
          <img
            v-on:click="galeryVisible = true"
            v-for="(commonImages, index) in product.image.slice(1)"
            class="common-images"
            v-bind:src="commonImages"
            v-bind:alt="commonImages"
          />
        </section>
      </div>
      <div class="info">
        <h2 class="logo">{{ product.name }}</h2>
        <p class="price">${{ product.price }}</p>
        <span>*Price for a Kg</span>
        <div class="quanty-container">
          <div class="input-simulator">{{ quanty }}</div>
          <button v-on:click="count('+')"><fa icon="plus"></fa></button>
          <button v-on:click="count('-')"><fa icon="minus"></fa></button>
          <button><fa icon="heart"></fa></button>
        </div>
        <button v-on:click="addItem" class="btn-green">
          <fa icon="cart-shopping"></fa> Add to Cart
        </button>

        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nobis facere. Pariatur iure
          molestias distinctio obcaecati libero maxime magni explicabo? Excepturi voluptatibus,
          adipisci aut laudantium pariatur officia similique? Ullam, perferendis!
        </p>
      </div>
      <section v-if="product" v-show="galeryVisible">
        <Gallery v-on:closeGallery="closingGallery" v-bind:imagesProduct="product.image" />
      </section>
    </div>
  </div>
</template>

<script>
import Gallery from "./Gallery.vue";
export default {
  props: ["product"],
  components: {
    Gallery,
  },
  computed: {
    quanty() {
      return this.$store.state.carrinho.quanty;
    },
  },

  data() {
    return {
      galeryVisible: false,
    };
  },
  methods: {
    addItem() {
      this.$store.dispatch("actionAddCarrinho", this.item);
    },
    count(operator) {
      if (operator === "+") {
        this.$store.dispatch("actionAddCount", 1);
      } else if (operator === "-") {
        this.$store.dispatch("actionDeletCount", 1);
      }
    },
    closingGallery(valueC) {
      this.galeryVisible = valueC;
    },
  },
};
</script>

<style lang="scss">
.product-gallery {
  img {
    cursor: pointer;
  }
}

.common-images {
  border: solid 1px transparent;
  &:hover {
    border: solid 1px var(--colorDisho);
  }
}
</style>
