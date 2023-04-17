<template>
  <section class="promotion-container">
    <div class="txt-container">
      <h2 class="txt-title">Save 20% on first shopping</h2>
      <p>Sign Up to Newsletter</p>
      <FieldInput typeInput="email" placeholder="Sign your email" />
    </div>
  </section>
</template>

<script>
import FieldInput from "./FieldInput.vue";
export default {
  components: {
    FieldInput,
  },
};
</script>

<style lang="scss">
.promotion-container {
  padding: 10vh 0;
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  background-color: rgba(255, 255, 255, 0.670542);
  border: solid orange;
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
