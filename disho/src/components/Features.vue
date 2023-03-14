<template>
  <div class="title-container">
    <h1 class="txt-title">Best Sellers This Week</h1>
    <p class="txt-subtitle">
      Pretium quam vulputate dignissim suspendisse in est ante. Ac felis donec et odio pellentesque
      diam
    </p>
    <VantagensCard />
  </div>
</template>
<script>
import VantagensCard from "./VantagensCard.vue";
export default {
  components: {
    VantagensCard,
  },
};
</script>
<style lang="'scss'"></style>
