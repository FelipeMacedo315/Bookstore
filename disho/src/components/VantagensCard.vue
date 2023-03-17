<template>
  <div class="card-vantagens">
    <div class="container-img">
      <span> <fa v-bind:icon="iconVantagens"></fa> </span>
    </div>
    <div class="text-vantagens">
      <h2 class="txt-title">{{ vantagensTitle }}</h2>
      <p class="txt-subtitle">{{ vantagensSubtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["iconVantagens", "vantagensTitle", "vantagensSubtitle"],
};
</script>

<style lang="scss">
.card-vantagens {
  background-color: var(--colorWhite);
  box-shadow: 0px 2px 12px rgba(183, 189, 196, 0.503551);
  border-radius: 12px;
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2% 0%;
}
.container-img {
  border-right: 2px solid var(--grayLight);
  padding-right: 5%;
  padding-left: 5%;
  span {
    font-size: 7vh;
    color: var(--colorText);
  }
}
.text-vantagens {
  width: 70%;
  text-align: left;
  h2 {
    color: var(--colorDisho);
    font-family: viga;
    font-size: 1.5rem;
  }
  p {
    color: var(--colorText);
    font-family: PT-Sans-Regular;
    font-size: 1rem;
  }
}
</style>
