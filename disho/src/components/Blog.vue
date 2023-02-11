<template>
  <section class="blog">
    <h1 class="txt-title">From the Blog</h1>
    <p class="txt-subtitle">
      Pretium quam vulputate dignissim suspendisse in est ante. Ac felis donec et odio pellentesque
      diam
    </p>
    <div class="container-slides">
      <div class="container-slides" :key="index" v-for="(news, index) in healthNotices">
        <CardsBlog
          :titleNews="news.title"
          :imgUrl="news.image_url"
          :newsDate="news.pubDate"
          :descriptionNews="news.description"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import CardsBlog from "../components/CardsBlog.vue";
import store from "../store/index";
const urlApi = "https://newsdata.io/api/1/news?&country=br&category=food&apikey=";
const keyApi = "pub_1468049882dfef310db635e9584aa75a7b1e2";
export default {
  components: {
    CardsBlog,
  },

  mounted() {
    const apiFetch = fetch(urlApi + keyApi)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((data) => store.dispatch("healthAction", data))
      .catch((err) => console.log(err.toString()));
  },
  computed: {
    ...mapState(["healthNotices"]),
    // Send data API for CardsBlog component
  },
};
</script>

<style lang="scss">
.blog {
  height: 100%;
  background-color: var(--colorWhite);
  padding: 5rem 2rem 1rem 2rem;
}
</style>
