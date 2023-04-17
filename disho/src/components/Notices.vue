<template>
  <section v-if="first3Notice.length" class="blog">
    <h1 class="txt-title">From the Blog</h1>
    <p class="txt-subtitle">Pretium quam vulputate dignissim suspendisse in est ante. Ac felis donec et odio pellentesque diam</p>
    <div class="container-slides">
      <div class="container-slides" :key="index" v-for="(news, index) in first3Notice">
        <CardsBlog
          :indexNotice="index"
          :titleNews="news.title"
          :imgUrl="news.image_url"
          :newsDate="news.pubDate"
          :descriptionNews="news.description"
        />
      </div>
    </div>
  </section>
  <section v-else>
    <h1>carregando</h1>
  </section>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import CardsBlog from "./CardsBlog.vue";
import store from "../store/index";
import axios from "axios";
const urlApi = "https://newsdata.io/api/1/news?&country=br&category=health&apikey=";
const keyApi = "pub_1468049882dfef310db635e9584aa75a7b1e2";
export default {
  components: {
    CardsBlog,
  },
  computed: {
    ...mapState(["healthNotices"]),
    ...mapGetters(["first3Notice"]),
    // Send data API for CardsBlog component
  },
  mounted() {
    axios
      .get(urlApi + keyApi)
      .then((response) => {
        store.dispatch("healthAction", response.data.results);
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style lang="scss">
.blog {
  background-color: var(--colorWhite);
  padding: 2rem 2rem 5vh 2rem;
  margin-top: 10vh;
}
@media (max-width: 768px) {
  .blog {
    margin-top: 0;
  }
}
</style>
