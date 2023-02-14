<template>
  <main>
    <Menu />
    <router-view> </router-view>
  </main>
</template>

<script>
import Menu from "./components/Menu.vue";
export default {
  components: {
    Menu,
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0vh;
  background-color: var(--grayBackground);
}

@font-face {
  font-family: viga;
  src: url("./assets/Viga-Regular.ttf");
}
@font-face {
  font-family: PT-Sans-Regular;
  src: url("./assets/PTSans-Regular.ttf");
}

// Colors variables
:root {
  --colorDisho: #05172c;
  --colorText: #264653;
  --colorBtn: #7eb23d;
  --grayLight: #d2d2d2;
  --colorPlaceholder: #77808a;
  --colorWhite: #ffffff;
  --grayBackground: #f5f5f5;
}
</style>
