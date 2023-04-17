<template>
  <div class="card-blog">
    <img class="news-img" v-if="imgUrl" :src="imgUrl" />
    <img class="news-img" v-else="imgUrl" src="../assets/galeria-placeholder.jpeg" />
    <p class="txt-date">{{ newsDate }}</p>
    <h2 class="txt-title-news">{{ titleNews }}</h2>
    <p v-if="descriptionNews" class="txt-description-news">
      {{ descriptionNews.slice(0, descriptionNews.indexOf(".") + 1) }}
    </p>

    <Button v-on:click="toSinglePost(indexNotice)" content="Read Moore" btnClass="btn-white" />
  </div>
</template>

<script>
import router from "@/router";
import Button from "./Button.vue";
export default {
  props: ["titleNews", "imgUrl", "newsDate", "descriptionNews", "indexNotice"],
  components: {
    Button,
  },
  methods: {
    toSinglePost(idxNotice) {
      router.push(`/singlePost/${idxNotice}`);
    },
  },
};
</script>

<style lang="scss">
.card-blog {
  box-sizing: border-box;
  width: 80%;
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
@media (max-width: 768px) {
  .card-blog {
    width: 100%;
  }
}
</style>
