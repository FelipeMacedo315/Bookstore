<template>
  <ul class="menu-responsive">
    <fa id="close-bar-icon" v-on:click="$emit('closeBar', false)" icon="close"></fa>
    <router-link v-on:click="$emit('closeBar', false)" to="/"> Home </router-link>
    <router-link v-on:click="$emit('closeBar', false)" to="/shop"> Shop </router-link>
    <router-link v-on:click="$emit('closeBar', false)" to="/blog"> Blog </router-link>
    <router-link v-on:click="$emit('closeBar', false)" to="/contact">Contact</router-link>
    <li class="logout-responsive" v-on:click="logout">Logout</li>
  </ul>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$emit("closeBar", false);
      window.localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss">
.menu-responsive {
  background-color: var(--colorBtn);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0vh;
  left: 0;
  a {
    font-size: 4em;
    color: var(--colorWhite);
  }
  .page-active {
    border-bottom: solid var(--colorWhite);
  }
  #close-bar-icon {
    height: 10%;
    width: 10%;
    margin-left: 80%;
    margin-bottom: 10%;
    color: var(--colorDisho);
    cursor: pointer;
    :hover {
      opacity: 0.5;
    }
  }
  .logout-responsive {
    font-family: viga;
    color: var(--colorDisho);
    font-size: 1.5em;
  }
}
</style>
