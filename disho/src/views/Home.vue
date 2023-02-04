<template>
  <main>
    <Header />
    <div class="title">
      <h1>Best Sellers This Week</h1>
      <p>
        Pretium quam vulputate dignissim suspendisse in est ante. Ac felis donec et odio
        pellentesque diam
      </p>
      <div class="vantagens-container">
        <Vantagens
          vantagensTitle="Fast Delivery"
          vantagensSubtitle="Within 2-3 hours after ordering"
          imgVantagens="truck.png"
        />
        <Vantagens
          vantagensTitle="Opening Hours"
          vantagensSubtitle="Mon.-Fri.: 9.00 am- 9.00 pm"
          imgVantagens="clock.png"
        />
        <Vantagens
          vantagensTitle="Eco-friendly packaging"
          vantagensSubtitle="Sustainable materials"
          imgVantagens="eco.png"
        />
      </div>
    </div>
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import Vantagens from "../components/Vantagens.vue";
export default {
  components: {
    Header,
    Vantagens,
  },
};
</script>

<style lang="scss">
.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  h1 {
    color: var(--colorDisho);
    font-family: viga;
    font-size: 3rem;
  }
  p {
    color: var(--colorText);
    font-family: Pt-Sans-Regular;
    font-size: 1.5rem;
  }
}
.vantagens-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
</style>
