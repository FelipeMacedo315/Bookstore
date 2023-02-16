<template>
  <footer>
    <div class="infos">
      <h1 class="logo">Disho</h1>
      <p class="txt-subtitle">
        Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus
      </p>
      <div class="container-social-media">
        <img class="social-media-icon" src="../assets/facebook.png" alt="facebook-icon" />
        <img class="social-media-icon" src="../assets/instagram.png" alt="facebook-icon" />
        <img class="social-media-icon" src="../assets/whatsapp.png" alt="facebook-icon" />
        <img class="social-media-icon" src="../assets/youtube.png" alt="facebook-icon" />
        <img
          class="social-media-icon"
          src="../assets/logotipo-do-linkedin.png"
          alt="facebook-icon"
        />
      </div>
    </div>
    <div class="contact">
      <Circle imgCircle="placeholder.png" circleClass="circle-big" />
      <p class="txt-adress">350 Bay Meadows St. Reynoldsburg, OH 43068</p>
    </div>
    <div class="timetable">
      <Circle imgCircle="phone-call.png" circleClass="circle-big" />
      <div class="timetable-txt">
        <p class="txt-subtitle">Mon - Fri: 9:00 am - 9:00 pm</p>
        <p class="txt-adress">+1-202-555-0168</p>
      </div>
    </div>
  </footer>
</template>

<script>
import Circle from "./Circle.vue";
export default {
  components: {
    Circle,
  },
};
</script>

<style lang="scss">
footer {
  background-color: var(--colorWhite);
  display: grid;
  grid-template-columns: 20% 35% 35%;
  column-gap: 5%;
  padding: 10% 2% 2% 2%;
  align-items: flex-start;
}
.infos {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2vh;
  p {
    text-align: left;
  }
}
.container-social-media {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.social-media-icon {
  height: 3vh;
}
.txt-adress {
  font-family: viga;
  font-size: 2rem;
  color: var(--colorDisho);
}

.contact,
.timetable {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.timetable-txt {
  white-space: nowrap;
  display: flex;
  flex-direction: column;
}
</style>
