<template>
  <div class="card-blog">
    <img class="news-img" v-if="imgUrl" :src="imgUrl" />
    <img class="news-img" v-else="imgUrl" src="../assets/galeria-placeholder.jpeg" />
    <p class="txt-date">{{ newsDate }}</p>
    <h2 class="txt-title-news">{{ titleNews }}</h2>
    <p class="txt-description-news">
      {{ descriptionNews.slice(0, descriptionNews.indexOf(".") + 1) }}
    </p>
    <Button content="Read Moore" btnClass="btn-white" />
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  props: ["titleNews", "imgUrl", "newsDate", "descriptionNews"],
  components: {
    Button,
  },
};
</script>

<style lang="scss">
.card-blog {
  width: 100%;
  margin-left: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  text-align: left;
  gap: 1rem;
}

.txt-date {
  font-size: 1rem;
  font-family: PT-Sans-Regular;
  color: var(--colorText);
}
.txt-title-news {
  color: var(--colorDisho);
  font-family: viga;
  font-size: 1.5rem;
}
.txt-description-news {
  font-size: 1.2rem;
  font-family: PT-Sans-Regular;
  color: var(--colorText);
}
.news-img {
  height: 40vh;
  width: 100%;
  object-fit: cover;
}
</style>
