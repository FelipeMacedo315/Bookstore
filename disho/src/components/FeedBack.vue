<template>
  <p class="feedback">
    {{ content }}
  </p>
</template>

<script>
export default {
  name: "FeedBack",
  props: ["content"],
};
</script>

<style lang="scss">
.feedback {
  background-color: black;
  position: absolute;
  right: 20%;
  left: 20%;
  bottom: 100%;
  animation-name: moveDown;
  animation-duration: 2s;
  font-family: viga;
  font-size: 1.5rem;
  color: white;
  padding: 2% 4%;
  width: 50%;
}

@keyframes moveDown {
  from {
    position: absolute;
    bottom: 120%;
    right: 20%;
    left: 20%;
  }
  to {
    bottom: 100%;
  }
}
</style>
