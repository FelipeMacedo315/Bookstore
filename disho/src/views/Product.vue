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
        <img v-on:click="handleGallery" class="main-image" v-bind:src="element.image[0]" alt="" />
        <section class="common-container-images">
          <img
            v-on:click="handleGallery"
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
    </div>
    <component v-if="item.length" v-show="galeryVisible">
      <Gallery v-bind:imagesProduct="item[0].image" />
    </component>
    <Features />
  </main>
</template>

<script>
import Button from "@/components/Button.vue";
import Features from "@/components/Features.vue";
import Gallery from "@/components/Gallery.vue";
import { mapState } from "vuex";
import BreadCrumps from "../components/BreadCrumps.vue";
export default {
  components: {
    BreadCrumps,
    Features,
    Button,
    Gallery,
  },
  computed: {
    ...mapState(["products"]),
    quanty() {
      return this.$store.state.carrinho.quanty;
    },
  },
  mounted() {
    this.singleProduct();
    window.scrollTo(0, 0);
  },
  data() {
    return {
      item: "",
      itemName: "",
      galeryVisible: false,
    };
  },
  methods: {
    singleProduct() {
      const checkItem = this.products.filter((item) => {
        return item._id === this.$route.params.id;
      });

      this.item = checkItem;
      this.itemName = checkItem[0].name;
      //console.log(this.$store.state.carrinho.carro);
    },
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
    handleGallery() {
      this.galeryVisible = true;
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
.common-container-images {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.common-images {
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
  gap: 1vh;
  h2 {
    padding-bottom: 5%;
  }
  .price {
    font-size: 1.5rem;
    padding-bottom: 6%;
  }
  .description {
    text-align: left;
    color: var(--colorText);
    font-family: Pt-Sans-Regular;
    font-size: 1.5rem;
    padding: 5% 0%;
  }
  span {
    color: var(--colorText);
    font-weight: 700;
    font-family: "PT-Sans-Regular";
  }
  button {
    width: 100%;
  }
}
.quanty-container {
  display: flex;
  width: 100%;
  margin: 5% 0%;
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
  font-family: "PT-Sans-Regular";
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--colorText);
}
</style>
