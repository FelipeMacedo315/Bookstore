<template>
  <div v-if="product" class="product-gallery">
    <div class="images-product">
      <img v-on:click="openGallery" class="main-image" v-bind:src="product.image[0]" alt="" />
      <component class="common-container-images">
        <img
          v-on:click="openGallery"
          v-for="(commonImages, index) in product.image.slice(1)"
          class="common-images"
          v-bind:src="commonImages"
          v-bind:alt="commonImages"
        />
      </component>
    </div>
    <div class="info">
      <h2 class="logo">{{ product.name }}</h2>
      <p class="price">${{ product.price }}</p>
      <span>*Price for a Kg</span>
      <div class="quanty-container">
        <div class="input-simulator">{{ quanty }}</div>
        <Circle background="#ffffff" color="#264653" size="7vh" v-on:click="count('+')"><fa icon="plus"></fa></Circle>
        <Circle background="#ffffff" color="#264653" size="7vh" v-on:click="count('-')"><fa icon="minus"></fa></Circle>
      </div>
      <button v-on:click="addItem" class="btn-green"><fa icon="cart-shopping"></fa> Add to Cart</button>

      <p class="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, nobis facere. Pariatur iure molestias distinctio obcaecati
        libero maxime magni explicabo? Excepturi voluptatibus, adipisci aut laudantium pariatur officia similique? Ullam,
        perferendis!
      </p>
    </div>
    <Gallery v-if="product" v-show="galleryVisible" v-on:closeGallery="closingGallery" v-bind:imagesProduct="product.image" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Gallery from "./Gallery.vue";
import ModalLoginVue from "./ModalLogin.vue";
import axios from "axios";
import store from "@/store";
import Circle from "./Circle.vue";
export default {
  props: ["product"],
  components: {
    Gallery,
    ModalLoginVue,
    Circle,
  },
  computed: {
    ...mapState("user", ["showModal", "galleryVisible"]),
    ...mapActions("user", ["actOpenModal", "actGalleryVisible"]),
    quanty() {
      return this.$store.state.carrinho.quanty;
    },
  },

  data() {
    return {};
  },
  methods: {
    addItem() {
      // this.$store.dispatch("actionAddCarrinho", this.item);
      if (localStorage.getItem("logged")) {
        store.dispatch("user/actOpenModal", false);
        axios
          .put(`https://disho.onrender.com/DishoApi/User/set-cart/${localStorage.getItem("token")}`, {
            idItem: this.product._id,
            nameItem: this.product.name,
            priceItem: this.product.price,
            imgItem: this.product.image[0],
            qtd: this.quanty,
          })
          .then((result) => {
            if (result.status === 200) {
              this.$router.push(`/ShoppingCart/${localStorage.getItem("token")}`);
            }
          })
          .catch((err) => {
            alert(err.response.data.msg);
          });
      } else {
        store.dispatch("user/actOpenModal", true);
      }
    },
    count(operator) {
      if (operator === "+") {
        this.$store.dispatch("actionAddCount", 1);
      } else if (operator === "-") {
        this.$store.dispatch("actionDeletCount", 1);
      }
    },
    closingGallery(valueChild) {
      store.dispatch("user/actGalleryVisible", valueChild);
    },
    openGallery() {
      store.dispatch("user/actGalleryVisible", true);
    },
  },
};
</script>

<style lang="scss"></style>
