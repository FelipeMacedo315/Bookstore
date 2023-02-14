<template>
  <div class="card-vantagens">
    <div class="container-img">
      <img v-bind:src="require(`../assets/${imgVantagens}`)" alt="" />
    </div>
    <div class="text-vantagens">
      <h2 class="txt-title">{{ vantagensTitle }}</h2>
      <p class="txt-subtitle">{{ vantagensSubtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgVantagens", "vantagensTitle", "vantagensSubtitle"],
};
</script>

<style lang="scss" scoped>
.card-vantagens {
  background-color: var(--colorWhite);
  box-shadow: 0px 2px 12px rgba(183, 189, 196, 0.503551);
  border-radius: 12px;
  width: 30%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container-img {
  border-right: 1px solid var(--grayLight);
  padding-right: 5%;
  padding-left: 5%;
  height: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
}
.text-vantagens {
  width: 70%;
  text-align: left;
}
.txt-title {
  color: var(--colorDisho);
  font-family: viga;
  font-size: 1.5rem;
}
.txt-subtitle {
  color: var(--colorText);
  font-family: PT-Sans-Regular;
  font-size: 1rem;
}
</style>
