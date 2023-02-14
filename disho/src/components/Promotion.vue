<template>
  <section class="promotion-container">
    <div class="txt-container">
      <h2 class="txt-title">Save 20% on first shopping</h2>
      <p>Sign Up to Newsletter</p>
    </div>
    <Input type="e-mail" placeholder="Email" />
  </section>
</template>

<script>
import Input from "./Input.vue";
export default {
  components: {
    Input,
  },
};
</script>

<style lang="scss">
.promotion-container {
  padding: 5vh 0;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  background-color: rgba(255, 255, 255, 0.670542);
  p {
    font-size: 1.5rem;
    font-family: viga;
    color: var(--colorDisho);
  }
}
.txt-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
