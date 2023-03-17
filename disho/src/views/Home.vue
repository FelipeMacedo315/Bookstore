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
</style>
