<template>
  <div class="card-product">
    <img v-bind:src="img" alt="" />

    <p>
      <span class="title-product">{{ name }} </span>
      <br />
      <span class="price">${{ price }} </span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["name", "img", "price"],
};
</script>

<style lang="scss">
.card-product {
  height: 50vh;
  width: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  img {
    height: 80%;
    width: 100%;
    object-fit: fill;
    border-radius: 1rem;
  }
}
.title-product {
  color: var(--colorDisho);
  font-size: 1rem;
  font-family: viga;
  font-weight: 400px;
}
.price {
  font-family: PT-Sans-Regular;
  font-size: 0.8rem;
  color: #fc4b4e;
  font-weight: 700;
}
</style>
