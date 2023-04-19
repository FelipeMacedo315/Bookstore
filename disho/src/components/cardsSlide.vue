<template>
  <img class="img-slide" v-bind:src="require(`../assets/${imgCard}`)" />
</template>

<script>
export default {
  props: ["imgCard"],
};
</script>

<style lang="scss">
.img-slide {
  width: 20vw;
  height: 30vh;
  box-shadow: 0px 2px 12px #b7bdc4;
}

@media (max-width: 768px) {
  .img-slide {
    width: 30vw;
  }
}
</style>
