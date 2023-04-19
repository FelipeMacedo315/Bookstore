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
import Notices from "../components/Notices.vue";
import Promotion from "../components/Promotion.vue";
import Features from "../components/Features.vue";
export default {
  components: {
    Headers,
    Notices,
    Features,
    Promotion,
  },
};
</script>

<style lang="scss"></style>
