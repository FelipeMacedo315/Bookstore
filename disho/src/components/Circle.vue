<template>
  <div v-bind:class="circleClass">
    <img v-bind:src="require(`../assets/${imgCircle}`)" v-bind:alt="imgCircle" />
  </div>
</template>

<script>
export default {
  props: ["imgCircle", "circleClass"],
};
</script>

<style lang="scss">
.circle-small {
  background-color: white;
  padding: 10%;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(183, 189, 196, 0.570852);

  img {
    height: 16px;
  }
}
.circle-big {
  background-color: white;
  height: 25vh;
  min-height: 25vh;
  width: 25vh;
  min-width: 25vh;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 2px 15px rgba(183, 189, 196, 0.570852);

  img {
    height: 30%;
    object-fit: cover;
  }
}
</style>
