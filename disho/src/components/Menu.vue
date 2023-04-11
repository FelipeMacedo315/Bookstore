<template>
  <menu>
    <div class="container-logo">
      <h1 class="logo">Disho</h1>
    </div>
    <ul class="sections-menu">
      <router-link to="/"> Home </router-link>
      <router-link to="/shop"> Shop </router-link>
      <router-link to="/blog"> Blog </router-link>
      <router-link to="/contact">Contact</router-link>
    </ul>
    <Input typeInput="search" placeholder="Search for product..." />
    <div class="circle-container">
      <Circle v-on:click="openCart" background="#ffffff" color="#264653" size="8vh">
        <fa icon="cart-shopping"></fa>
      </Circle>
      <Circle v-on:click="openCart" background="#ffffff" color="#264653" size="8vh">
        <fa icon="user"></fa>
      </Circle>
    </div>
  </menu>
</template>

<script>
import Input from "../components/Input.vue";
import Circle from "./Circle.vue";
export default {
  components: {
    Input,
    Circle,
  },
  methods: {
    openCart() {
      this.$router.push(`/ShoppingCart/${localStorage.getItem("token")}`);
    },
  },
};
</script>

<style lang="scss">
menu {
  height: 15vh;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0% 2rem;
  a {
    text-decoration: none;
    font-size: 1rem;
    color: var(--colorDisho);
    font-weight: 400;
    font-family: "PT-Sans-Regular";
  }
}
.container-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  font-family: viga;
  font-size: 32px;
  color: var(--colorDisho);
}
.sections-menu {
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  li {
    color: var(--colorText);
    list-style: none;
  }
}
.circle-container {
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
