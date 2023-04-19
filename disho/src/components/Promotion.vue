<template>
  <section class="promotion-container">
    <div class="txt-container">
      <h2 class="txt-title">Save 20% on first shopping</h2>
      <p>Sign Up to Newsletter</p>
    </div>
    <FieldInput inputType="email" placeholder="Sign your email" />
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
@media (max-width: 768px) {
  .promotion-container {
    padding: 5vh 0;
    flex-direction: column;
    align-items: center;
    gap: 5vh;
  }
  .txt-container {
    align-items: center;
    gap: 5vh;
  }
}
</style>
