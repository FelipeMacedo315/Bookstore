<template>
  <main>
    <BreadCrumps>
      <a>Profile </a>
      <a>|</a>
      <a>Cart</a>
    </BreadCrumps>
    <div class="container-cart">
      <div class="cart-products">
        <h2 class="txt-title">Shopping Cart</h2>
        <div class="divider-title"></div>
        <div v-for="element in itemsCart.cart" class="item-cart">
          <img v-bind:src="element.imgItem" />
          <section>
            <h2 class="txt-title">{{ element.nameItem }}</h2>
            <span class="price">${{ element.priceItem }} </span>
          </section>
          <section>
            <h2 class="txt-title">{{ element.qtd }}</h2>
          </section>
          <section>
            <h2 class="txt-title">${{ (element.priceItem * element.qtd).toFixed(2) }}</h2>
          </section>
          <CircleVue v-on:click="deleteItem(element.idItem)" background="#ffffff" color="red" size="8vh" sizeText="1.2em">
            <fa id="trash" icon="trash"></fa>
          </CircleVue>
        </div>
      </div>
      <div class="cart-infos">
        <h3 class="txt-subtitle">There are {{ sizeCart }} Items in Your Cart</h3>
        <section class="container-total">
          <h1 class="txt-title">Total:</h1>
          <h1 class="txt-title">${{ itemsCart.totalValueBuy }}</h1>
        </section>
        <section class="order-text">
          <p class="txt-title">Add a note to your order:</p>
          <textarea placeholder="Add your note here…" cols="30" rows="10"></textarea>
        </section>
      </div>

      <div class="continue-shopping">
        <router-link to="/shop">
          <p class="txt-title">Continue Shopping</p>
          <CircleVue background="#7eb23d" color="#ffffff" size="1.7em" sizeText="0.9rem"> <fa icon="arrow-right"></fa> </CircleVue>
        </router-link>
      </div>
      <ButtonVue v-on:click="proceedBuy" btnClass="btn-green" content="Proceed to Checkout" />
    </div>
    <FeaturesVue />
  </main>
</template>

<script>
import FeaturesVue from "@/components/Features.vue";
import BreadCrumps from "../components/BreadCrumps.vue";
import axios from "axios";
import CircleVue from "@/components/Circle.vue";
import ButtonVue from "@/components/Button.vue";

export default {
  async mounted() {
    this.getCart();
  },
  data() {
    return {
      itemsCart: "",
      sizeCart: "",
    };
  },
  methods: {
    async deleteItem(id) {
      const delItem = await axios.delete(`http://localhost:3000/DishoApi/User/delet-cart/${localStorage.getItem("token")}`, {
        data: {
          idItem: id,
        },
      });
      const response = delItem.data;
      this.getCart();
    },
    async getCart() {
      if (localStorage.getItem("token")) {
        const fetchDataCart = await axios.get(`http://localhost:3000/DishoApi/User/get-cart/${localStorage.getItem("token")}`);
        const result = await fetchDataCart.data;
        this.itemsCart = result;
        this.sizeCart = result.cart.length;
      }
    },
    proceedBuy() {
      window.confirm("Este é um site Ficticio feito com objetivo de demonstrar conhecimentos nas ferramentas em que foi construido!");
    },
  },
  components: {
    BreadCrumps,
    FeaturesVue,
    CircleVue,
    ButtonVue,
  },
};
</script>

<style lang="scss">
.container-cart {
  padding: 5%;
  display: grid;
  grid-template-columns: 60% 35%;
  column-gap: 5%;
  row-gap: 2%;
  p {
    font-size: 1.2rem;
    font-weight: 700;
    text-align: right;
  }
}
.cart-products {
  background-color: var(--colorWhite);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5vh;
  border-radius: 10px;
  box-shadow: 0px 2px 12px var(--grayLight);
}
.item-cart {
  display: grid;
  grid-template-columns: 20% 30% 10% 20% 20%;
  column-gap: 1%;
  align-items: center;
  width: 100%;
  img {
    height: 20vh;
    width: 7vw;
    object-fit: fill;
  }
  section {
    h2 {
      font-size: 1.5rem;
    }
  }
}
#trash {
  color: #fc4b4e;
  transition: 0.8s linear;
}

.cart-infos {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 5vh;
  border-radius: 10px;
  background-color: var(--colorWhite);
  box-shadow: 0px 2px 12px var(--grayLight);
  h3 {
    text-align: start;
    padding-bottom: 5%;
    border-bottom: solid 2px var(--grayLight);
    font-size: 1rem;
  }
}

.container-total {
  display: flex;
  justify-content: space-between;
  border-bottom: solid 2px var(--grayLight);
  h1 {
    font-size: 2rem;
    padding-bottom: 10%;
    padding-top: 5%;
  }
}

.order-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 5vh;
  p {
    font-size: 1rem;
    padding-bottom: 2vh;
  }
  textarea {
    resize: none;
    width: 100%;
    border-radius: 10px;
    border: solid 1px var(--grayLight);
    height: 30vh;
    font-family: PT-Sans-Regular;
    padding-top: 5%;
    padding-left: 2%;
  }
}
a {
  text-decoration: none;
}
.continue-shopping {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  a {
    display: flex;

    p {
      padding-right: 1vh;
    }
  }
}
</style>
