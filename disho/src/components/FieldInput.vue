<template>
  <div class="field-container">
    <input v-on:change="handleFieldValue" v-bind:type="inputType" v-bind:placeholder="placeholder" />
    <button v-on:click="productFetch">
      <fa id="icon-glass" icon="magnifying-glass"></fa>
    </button>
  </div>
</template>

<script>
import router from "@/router";
import store from "@/store";
import { mapState, mapActions } from "vuex";
export default {
  props: ["inputType", "placeholder"],
  computed: {
    ...mapState(["typeProduct"]),
    ...mapState("searchProduct", ["searchProduct"]),
    ...mapActions("searchProduct", ["updateSearch"]),
    ...mapActions(["fetchFilterProducts"]),
  },
  methods: {
    productFetch() {
      if (this.inputType === "search") {
        store.dispatch(
          "fetchFilterProducts",
          `http://localhost:3000/DishoApi/${this.typeProduct}/filter?&page=1&nameItem=${this.searchProduct}&maxPrice=${50}`
        );
      }
      if (this.inputType === "email") {
        window.alert("Ainda não temos promoções");
      }

      router.push("/shop");
    },
    handleFieldValue(valueField) {
      store.dispatch("searchProduct/updateSearch", valueField.target.value);
    },
    promotionFeedback() {
      window.alert("Neste momento não temos nenhuma promoção disponivel");
    },
  },
};
</script>

<style lang="scss">
.field-container {
  height: 50%;
  width: 30vw;
  display: flex;
  justify-content: center;
  flex-direction: row;
  button {
    height: 100%;
    width: 20%;
    background-color: var(--colorBtn);
    border: none;
    border-top-right-radius: 26px;
    border-bottom-right-radius: 26px;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
    img {
      filter: invert(100%);
    }
  }
  input {
    font-size: 1rem;
    box-sizing: content-box;
    border-radius: 26px 0px 0px 26px;
    width: 75%;
    box-sizing: border-box;
    border: 1px solid var(--grayLight);
    font-family: Pt-Sans-Regular;
    padding-left: 5%;

    &::placeholder {
      padding-left: 5%;
      color: var(--colorPlaceholder);
    }
  }
  #icon-glass {
    color: white;
    font-size: 1.5rem;
  }
}
</style>
