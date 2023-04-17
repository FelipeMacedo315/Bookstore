<template>
  <div class="card-slides">
    <img v-bind:src="require(`../assets/${imgCard}`)" />
  </div>
</template>

<script>
export default {
  props: ["imgCard"],
};
</script>

<style lang="scss">
.card-slides {
  height: 25vh;
  width: 34vh;
  border-radius: 12px;
  border: none;
  margin-left: 0.5rem;
  box-shadow: 0px 2px 12px #b7bdc4;

  img {
    border-radius: 12px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
@media (max-width: 768px) {
  .card-slides {
    width: 25vh;
  }
}
</style>
