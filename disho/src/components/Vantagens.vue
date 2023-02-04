<template>
  <div class="card-vantagens">
    <div class="container-img">
      <img v-bind:src="require(`../assets/${imgVantagens}`)" alt="" />
    </div>
    <div class="text-vantagens">
      <h2>{{ vantagensTitle }}</h2>
      <p>{{ vantagensSubtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgVantagens", "vantagensTitle", "vantagensSubtitle"],
};
</script>

<style lang="scss">
.card-vantagens {
  background-color: var(--colorWhite);
  box-shadow: 0px 2px 12px rgba(183, 189, 196, 0.503551);
  border-radius: 12px;
  height: 15vh;
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.container-img {
  border-right: 1px solid var(--grayLight);
  padding-right: 5%;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}
.text-vantagens {
  text-align: left;
  h2 {
    color: var(--colorDisho);
    font-family: viga;
    font-size: 1.5rem;
  }
  p {
    color: var(--ColorText);
    font-family: PT-Sans-Regular;
    font-size: 1rem;
  }
}
</style>
