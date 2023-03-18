<template>
  <div class="product-gallery">
    <div v-for="(element, indexEl) in item" class="images-product">
      <img
        v-on:click="galeryVisible = true"
        class="main-image"
        v-bind:src="element.image[0]"
        alt=""
      />
      <section class="common-container-images">
        <img
          v-on:click="galeryVisible = true"
          v-for="(commonImages, index) in element.image.slice(1)"
          class="common-images"
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
    <component v-if="item.length" v-show="galeryVisible">
      <Gallery v-on:closeGallery="closingGallery" v-bind:imagesProduct="item[0].image" />
    </component>
  </div>
</template>

<script>
import Gallery from "./Gallery.vue";
export default {
  props: ["item"],
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
