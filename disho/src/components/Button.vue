<template>
  <button v-bind:disabled="btnDisable" v-bind:class="btnClass">{{ content }}</button>
</template>
<script>
export default {
  props: ["content", "btnClass", "btnDisable"],
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
  width: 100%;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
}
:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.btn-white {
  background-color: var(--colorWhite);
  color: var(--colorDisho);
  font-family: viga;
  padding: 0.9rem;
  font-size: 1rem;
  font-weight: 400;
  width: 100%;
  border-radius: 3rem;
  border: 1px groove var(--colorDisho);
  transition: 400ms;
  cursor: pointer;
  &:hover {
    background-color: var(--colorText);
    color: var(--colorWhite);
  }
}
</style>
