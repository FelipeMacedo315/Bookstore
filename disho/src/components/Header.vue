<template>
  <header>
    <div class="header-txt">
      <h1>Check out our Best Weekly Prices</h1>
      <p>Pellentesque et justo lorem. Proin hendrerit, velit vitae vehicula vulputate</p>
    </div>
    <div class="placeholder-img">
      <img src="../assets/foto_hortifruti_v07.jpg" alt="" />
    </div>
    <div class="slides">
      <CardSlide imgCard="comida-salada-alface-legumes-imagem-de-fundo.jpg" />
      <CardSlide imgCard="thinkstockphotos-613144376.webp" />
      <CardSlide imgCard="grapes-strawberries-pineapple-kiwi-apricot-banana-and-whole-pineapple.jpg" />
    </div>
  </header>
</template>

<script>
import Button from "../components/Button.vue";
import CardSlide from "./cardsSlide.vue";
export default {
  components: {
    Button,
    CardSlide,
  },
};
</script>

<style lang="scss">
header {
  background-color: var(--colorWhite);
  padding-left: 2rem;
  margin-bottom: 15%;
  height: 80vh;
  display: grid;
  grid-template-columns: auto auto;
}
.header-txt {
  width: 70%;
  word-break: keep-all;
  text-align: left;
  display: flex;
  flex-direction: column;
  padding-top: 20%;
  gap: 0.8rem;
  h1 {
    color: var(--colorDisho);
    font-size: 4em;
    line-height: 3.5rem;
    font-family: viga;
  }
  p {
    font-family: Pt-Sans-Regular;
    color: var(--colorText);
    font-size: 2em;
  }
}
.placeholder-img {
  margin-right: -10vh;
  width: 100vh;
  height: 100vh;
  border-radius: 50%;
  background-color: #7eb23d54;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
}

.slides {
  width: 100%;
  margin-top: -30vh;
  margin-left: 25%;
  display: flex;
  box-sizing: border-box;
  column-gap: 2vh;
}
@media (max-width: 768px) {
  header {
    margin: 0;
    padding: 0;
    height: auto;
    grid-template-columns: auto;
    justify-content: center;
    justify-items: center;
  }
  .placeholder-img {
    margin: 0;
    width: 60vh;
    height: 60vh;
  }
  .header-txt {
    width: 100%;
    text-align: center;
    padding: 10% 5% 0% 5%;
    width: 100vw;
    h1 {
      font-size: 3em;
    }
    p {
      font-size: 1.5em;
    }
  }
  .slides {
    flex-direction: row;
    justify-content: center;
    margin: 0;
  }
}
</style>
