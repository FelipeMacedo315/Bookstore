<template>
  <div class="circle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["background", "color", "size", "sizeText"],
};
</script>

<style lang="scss">
.circle {
  height: v-bind(size);
  width: v-bind(size);
  border-radius: 50%;
  background-color: v-bind(background);
  box-shadow: 0px 2px 15px rgba(183, 189, 196, 0.570852);
  color: v-bind(color);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 50ms;
  font-size: v-bind(sizeText);
  margin-left: 5%;
  cursor: pointer;
  &:active {
    background-color: var(--colorText);
    color: red;
  }
}
</style>
