<template>
  <div class="circle-profile">
    <img v-bind:src="require(`../assets/${imgCircle}`)" v-bind:alt="imgCircle" />
  </div>
</template>

<script>
export default {
  props: ["imgCircle"],
};
</script>

<style lang="scss">
.circle-profile {
  background-color: white;
  padding: 10%;
  border-radius: 24px;
  img {
    height: 16px;
  }
}
</style>
