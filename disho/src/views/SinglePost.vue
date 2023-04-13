<template>
  <div class="single-post-page" v-if="healthNotices.length > 0">
    <BreadCrumps>
      <a>Home </a>
      <a> | </a>
      <a>Notice </a>
    </BreadCrumps>
    <h1 class="txt-title">{{ healthNotices[idxNotice].title }}</h1>
    <p class="txt-title">
      By: <span class="txt-title" v-for="creator in healthNotices[idxNotice].creator"> {{ creator }} | </span>
      <span class="txt-subtitle"> {{ healthNotices[idxNotice].pubDate }} </span>
    </p>
    <img v-if="healthNotices[idxNotice].image_url" v-bind:src="healthNotices[idxNotice].image_url" alt="Imagem notice" />
    <img v-else src="../assets/galeria-placeholder.jpeg" alt="Imagem notice" />
    <h2 class="txt-subtitle">{{ healthNotices[idxNotice].description }}</h2>
    <p id="notice" class="txt-subtitle">{{ healthNotices[idxNotice].content }}</p>
  </div>
  <div class="notice-indisponible" v-else>
    <h1 class="txt-title">Carregando</h1>
    <div class="continue-shopping"></div>
  </div>
</template>

<script>
import CircleVue from "@/components/Circle.vue";
import { mapState } from "vuex";
import BreadCrumps from "@/components/BreadCrumps.vue";
import axios from "axios";
import store from "@/store";

const urlApi = "https://newsdata.io/api/1/news?&country=br&category=health&apikey=";
const keyApi = "pub_1468049882dfef310db635e9584aa75a7b1e2";
export default {
  components: {
    CircleVue,
    BreadCrumps,
  },
  mounted() {
    window.scrollTo(0, 0);
    axios
      .get(urlApi + keyApi)
      .then((response) => {
        store.dispatch("healthAction", response.data.results);
      })
      .catch((err) => console.log(err));
  },

  computed: {
    ...mapState(["healthNotices"]),
  },
  data() {
    return {
      idxNotice: this.$route.params.idNotice,
    };
  },
};
</script>

<style lang="scss">
.single-post-page {
  padding: 5% 10%;
  text-align: left;
  display: flex;
  flex-direction: column;
  row-gap: 4vh;
  h1 {
    text-align: center;
  }
  h2 {
    font-weight: 700;
  }
  span {
    font-size: 1em;
  }
  p {
    font-size: 1em;
    line-height: 2.5em;
  }
  img {
    width: 100%;
    height: 90vh;
    object-fit: fill;
  }
}
.notice-indisponible {
  padding: 10% 10% 20% 10%;
  p {
    font-size: 1.5em;
    font-weight: 200;
  }
  .continue-shopping {
    margin-top: 5%;
    justify-content: center;
  }
}
</style>
