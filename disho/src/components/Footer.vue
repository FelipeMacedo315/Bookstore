<template>
  <footer>
    <div class="infos">
      <h1 class="logo">Disho</h1>
      <p class="txt-subtitle">Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus</p>
      <div class="container-social-media">
        <img class="social-media-icon" src="../assets/facebook.png" alt="facebook-icon" />
        <img class="social-media-icon" src="../assets/instagram.png" alt="facebook-icon" />
        <img class="social-media-icon" src="../assets/whatsapp.png" alt="facebook-icon" />
        <img class="social-media-icon" src="../assets/youtube.png" alt="facebook-icon" />
        <img class="social-media-icon" src="../assets/logotipo-do-linkedin.png" alt="facebook-icon" />
      </div>
    </div>
    <div class="contact">
      <Circle background="#ffffff" color="#7eb23d" size="25vh" sizeText="4em">
        <fa icon="location-dot"></fa>
      </Circle>
      <p class="txt-adress">350 Bay Meadows St. Reynoldsburg, OH 43068</p>
    </div>
    <div class="timetable">
      <Circle background="#ffffff" color="#7eb23d" size="25vh" sizeText="4em">
        <fa icon="headset"></fa>
      </Circle>
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
  grid-template-columns: 25% 35% 35%;
  column-gap: 2%;
  padding: 2% 1%;
  max-height: 40vh;
}
.infos {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 2vh;
  p {
    text-align: left;
  }
}
.container-social-media {
  width: 50%;
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
  width: 60%;
  font-size: 1.6em;
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
