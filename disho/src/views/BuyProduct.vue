<template>
  <main class="single-product">
    <BreadCrumps>
      <a>Home </a>
      <a>|</a>
      <a>Shop</a>
      <a>|</a>
      <a>{{ itemName }}</a>
    </BreadCrumps>
    <CardSingleProduct v-bind:product="item" />
    <Features />
  </main>
</template>

<script>
import Button from "@/components/Button.vue";
import CardSingleProduct from "@/components/CardSingleProduct.vue";
import Features from "@/components/Features.vue";
import { mapState } from "vuex";
import BreadCrumps from "../components/BreadCrumps.vue";
export default {
  components: {
    BreadCrumps,
    Features,
    Button,
    CardSingleProduct,
  },
  mounted() {
    this.singleProduct();
    window.scrollTo(0, 0);
  },
  computed: {
    ...mapState(["products", "typeProduct"]),
    quanty() {
      return this.$store.state.carrinho.quanty;
    },
  },
  data() {
    return {
      item: "",
      galleryStatus: false,
      itemName: "",
    };
  },
  methods: {
    closeGallery(valueChild) {
      this.galeryVisible = valueChild;
      console.log(valueChild);
    },

    async singleProduct() {
      const x = await fetch(`https://disho.onrender.com/DishoApi/${this.typeProduct}/${this.$route.params.id}`);
      const checkItem = await x.json();
      this.item = await checkItem;
      this.itemName = await checkItem.name;
      console.log(checkItem);
      //console.log(this.$store.state.carrinho.carro);
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
  img {
    cursor: pointer;
  }
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
  border: solid 1px transparent;
  &:hover {
    border: solid 1px var(--colorDisho);
  }
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
  gap: 2vh;
  h2 {
    padding-top: 5%;
  }
  .price {
    font-size: 1.5rem;
  }
  .description {
    text-align: left;
    color: var(--colorText);
    font-family: Pt-Sans-Regular;
    font-size: 1.5rem;
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
@media (max-width: 768px) {
  .product-gallery {
    flex-direction: column;
    .info {
      width: 100%;
      align-items: center;
      margin: 0;
      button {
        margin-left: 0%;
      }
    }
  }
  .quanty-container {
    justify-content: center;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .product-gallery {
    .info {
      width: 50%;
      align-items: center;
    }
    .quanty-container {
      justify-content: center;
    }
  }
}
</style>
