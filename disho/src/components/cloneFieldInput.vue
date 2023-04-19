<!-- Esse componente é apenas um clone do componente FIELDINPUT.FOI CRIADO APENAS DEVIDO A UM ERRO DO VUE-CLI -->

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
        router.push("/shop");
      }
      if (this.inputType === "email") {
        window.alert("Ainda não temos promoções");
      }
    },
    handleFieldValue(valueField) {
      store.dispatch("searchProduct/updateSearch", valueField.target.value);
    },
  },
};
</script>

<style lang="scss"></style>
