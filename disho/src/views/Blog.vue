<template>
  <main v-if="healthNotices.length" class="blog-page">
    <BreadCrumps>
      <a>Home </a>
      <a>|</a>
      <a>Blog</a>
    </BreadCrumps>
    <div class="post" v-for="(notice, index) in healthNotices">
      <img v-if="notice.image_url" v-bind:src="notice.image_url" alt="notice-image" />
      <img v-else src="../assets/galeria-placeholder.jpeg" alt="notice-image" />
      <p class="txt-title">
        By: <span class="txt-title" v-for="creator in notice.creator"> {{ creator }} | </span>
        <span class="txt-subtitle"> {{ notice.pubDate }} </span>
      </p>
      <h1 class="txt-title">{{ notice.title }}</h1>
      <p class="txt-subtitle">{{ notice.description }}</p>
      <ButtonVue v-on:click="toSinglePost(index)" content="Read More" btnClass="btn-white" />
    </div>
  </main>
  <main v-else>
    <h1>carrgando</h1>
  </main>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import store from "@/store";
import router from "@/router";
import ButtonVue from "@/components/Button.vue";
import BreadCrumps from "@/components/BreadCrumps.vue";

const urlApi = "https://newsdata.io/api/1/news?&country=br&category=health&apikey=";
const keyApi = "pub_1468049882dfef310db635e9584aa75a7b1e2";
export default {
  components: {
    ButtonVue,
    BreadCrumps,
  },
  computed: {
    ...mapState(["healthNotices"]),
  },
  mounted() {
    axios
      .get(urlApi + keyApi)
      .then((response) => {
        store.dispatch("healthAction", response.data.results);
      })
      .catch((err) => console.log(err));
  },
  methods: {
    toSinglePost(idNotice) {
      router.push(`/singlePost/${idNotice}`);
    },
  },
};
</script>

<style lang="scss">
.blog-page {
  display: flex;
  flex-direction: column;
  padding: 5% 2%;
  gap: 10vh;
  background-color: #f2f2f5;

  h1 {
    text-align: left;
    font-size: 1.5em;
  }
  p,
  span {
    text-align: left;
    font-size: 1em;
  }
}
.post {
  display: flex;
  flex-direction: column;
  gap: 2vh;
  img {
    height: 50vh;
  }
  button {
    width: 20%;
    background-color: transparent;
  }
}
</style>
