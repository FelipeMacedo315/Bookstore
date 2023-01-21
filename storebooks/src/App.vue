<template>
  <main>
    <nav>
      <button @click="showNav = !showNav"></button>
    </nav>
    <nav v-show="showNav">
      <Navigation-Menu />
    </nav>
  </main>
</template>
<script>
import NavMenu from "./components/Navigation-Menu.vue";
export default {
  components: {
    "Navigation-Menu": NavMenu,
  },
  data() {
    return {
      showNav: false,
    };
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  button {
    padding: 2.5vh;
    background-image: url("./assets/navigation-bar.png");
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: cover;
    background-repeat: no-repeat;
    float: left;
    border: none;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
      background-color: rgb(172, 169, 169);
    }
  }
}
</style>
