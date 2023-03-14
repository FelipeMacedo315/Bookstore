<template>
  <main class="page-home">
    <Header />
    <Features />
    <Blog />
    <Promotion />
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import Vantagens from "../components/VantagensCard.vue";
import Blog from "../components/Blog.vue";
import Footer from "../components/Footer.vue";
import Promotion from "../components/Promotion.vue";
import Features from "@/components/Features.vue";
export default {
  components: {
    Header,
    Vantagens,
    Blog,
    Footer,
    Promotion,
    Features,
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
