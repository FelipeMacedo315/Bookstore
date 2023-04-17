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
  padding: 1% 0%;
  height: 10vh;
}
.container-img {
  padding-right: 5%;
  padding-left: 5%;
  span {
    font-size: 5vh;
    color: var(--colorText);
  }
}
.text-vantagens {
  width: 70%;
  text-align: left;
  border-left: 2px solid var(--grayLight);
  padding-left: 5%;
  h2 {
    color: var(--colorDisho);
    font-family: viga;
    font-size: 1.3em;
  }
  p {
    color: var(--colorText);
    font-family: PT-Sans-Regular;
    font-size: 1em;
  }
}
@media (max-width: 768px) {
  .text-vantagens {
    text-align: center;
  }
  .card-vantagens {
    width: 90%;
    margin: 5% 5% 0% 5%;
    height: 12vh;
  }
}
</style>
