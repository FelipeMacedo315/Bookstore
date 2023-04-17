<template>
  <main>
    <Headers />
    <Features />
    <Notices />
    <Promotion />
  </main>
</template>
<script>
import Headers from "../components/Header.vue";
import Vantagens from "../components/VantagensCard.vue";
import Notices from "../components/Notices.vue";
import Footer from "../components/Footer.vue";
import Promotion from "../components/Promotion.vue";
import Features from "../components/Features.vue";
export default {
  components: {
    Headers,
    Vantagens,
    Notices,
    Features,
    Footer,
    Promotion,
  },
};
</script>

<style lang="scss"></style>
