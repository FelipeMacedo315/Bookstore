<template>
  <div class="loader">
    <fa class="icon-loader" v-bind:icon="fruitsIcon[idxFruitsIcon]"></fa>
    {{ tempLoading() }}
    <h3 class="loading-text">Loading</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruitsIcon: ["apple-alt", "lemon", "carrot"],
      idxFruitsIcon: 0,
    };
  },
  methods: {
    tempLoading() {
      setInterval(() => {
        if (this.fruitsIcon.length === this.idxFruitsIcon) {
          this.idxFruitsIcon = 0;
        } else {
          this.idxFruitsIcon = this.idxFruitsIcon + 1;
        }
      }, 400);
    },
  },
};
</script>

<style lang="scss">
.loader {
  height: 30vh;
  padding: 10%;
}
.icon-loader {
  height: 100%;
  color: var(--colorBtn);
}
.loading-text {
  font-family: "PT-Sans-Regular";
  color: var(--colorDisho);
}
</style>
