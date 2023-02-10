<template>
  <div>
    <img v-if="imgUrl" :src="imgUrl" />
    <img v-else="imgUrl" src="../assets/galeria-placeholder.jpeg" />
    <p>{{ newsDate }}</p>
    <h2 class="">{{ titleNews }}</h2>
  </div>
</template>

<script>
export default {
  props: ["titleNews", "imgUrl", "newsDate"],
};
</script>

<style lang="scss"></style>
