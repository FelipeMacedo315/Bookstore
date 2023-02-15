<template>
  <main class="page-home">
    <div class="title-container">
      <h1 class="txt-title">Best Sellers This Week</h1>
      <p class="txt-subtitle">
        Pretium quam vulputate dignissim suspendisse in est ante. Ac felis donec et odio
        pellentesque diam
      </p>
      <div class="container-slides">
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
    <Blog />
    <Promotion />
    <Footer />
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import Vantagens from "../components/Vantagens.vue";
import Blog from "../components/Blog.vue";
import Footer from "../components/Footer.vue";
import Promotion from "../components/Promotion.vue";
export default {
  components: {
    Header,
    Vantagens,
    Blog,
    Footer,
    Promotion,
  },
};
</script>

<style lang="scss">
.page-home {
  display: grid;
  grid-template-columns: 100%;
}
.title-container {
  background-color: var(--grayBackground);
  margin-top: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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
