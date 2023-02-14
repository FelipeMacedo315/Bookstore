<template>
  <button v-bind:class="btnClass">{{ content }}</button>
</template>

<script>
export default {
  props: ["content", "btn-class"],
};
</script>

<style lang="scss">
.btn-green {
  background-color: var(--colorBtn);
  color: var(--colorWhite);
  font-family: viga;
  padding: 0.9rem 12%;
  font-size: 1rem;
  border-radius: 3rem;
  border: none;
}
.btn-white {
  background-color: var(--colorWhite);
  color: var(--colorDisho);
  font-family: viga;
  padding: 0.9rem 12%;
  font-size: 1rem;
  border-radius: 3rem;
  border: 1px groove var(--colorDisho);
}
</style>
