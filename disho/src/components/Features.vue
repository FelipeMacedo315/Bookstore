<template>
  <div class="title-container">
    <h1 class="txt-title">Best Sellers This Week</h1>
    <p class="txt-subtitle">
      Pretium quam vulputate dignissim suspendisse in est ante. Ac felis donec et odio pellentesque
      diam
    </p>
    <div class="container-slides">
      <Vantagens
        vantagensTitle="Fast Delivery"
        vantagensSubtitle="Within 2-3 hours after ordering"
        iconVantagens="truck"
      />
      <Vantagens
        vantagensTitle="Opening Hours"
        vantagensSubtitle="Mon.-Fri.: 9.00 am- 9.00 pm"
        iconVantagens="clock"
      />
      <Vantagens
        vantagensTitle="Eco-friendly packaging"
        vantagensSubtitle="Sustainable materials"
        iconVantagens="leaf"
      />
    </div>
  </div>
</template>
<script>
import Vantagens from "./VantagensCard.vue";
export default {
  components: {
    Vantagens,
  },
};
</script>
<style lang="scss">
.title-container {
  background-color: var(--grayBackground);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 3% 0%;
}
.txt-title {
  color: var(--colorDisho);
  font-family: viga;
  font-size: 3rem;
}
.txt-subtitle {
  color: var(--colorText);
  font-family: Pt-Sans-Regular;
  font-size: 1.5rem;
}
.container-slides {
  box-sizing: border-box;
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
}
</style>
