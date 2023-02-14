<template>
  <header>
    <div class="header-txt">
      <h1>Check out our Best Weekly Prices</h1>
      <p>Pellentesque et justo lorem. Proin hendrerit, velit vitae vehicula vulputate</p>
      <div class="container-btns">
        <Button btnClass="btn-green" content="View Sale" />
        <Button btnClass="btn-white" content="Shop all" />
      </div>
    </div>
    <div class="placeholder-img">
      <img src="../assets/foto_hortifruti_v07.jpg" alt="" />
    </div>

    <div class="slides">
      <CardSlide imgCard="comida-salada-alface-legumes-imagem-de-fundo.jpg" />
      <CardSlide imgCard="thinkstockphotos-613144376.webp" />
      <CardSlide
        imgCard="grapes-strawberries-pineapple-kiwi-apricot-banana-and-whole-pineapple.jpg"
      />
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
  padding: 0px 2rem;
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
  justify-content: center;
  gap: 0.8rem;
  h1 {
    color: var(--colorDisho);
    font-size: 3rem;
    line-height: 3.5rem;
    font-family: viga;
  }
  p {
    font-family: Pt-Sans-Regular;
    color: var(--colorText);
    font-size: 1.5rem;
  }
}
.placeholder-img {
  position: relative;
  right: -10%;
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
.container-btns {
  width: 75%;
  display: flex;
  justify-content: space-between;
}
.slides {
  padding: 0.5rem 0px;
  width: 100%;
  position: absolute;
  top: 90%;
  display: flex;
  justify-content: center;
}
</style>
