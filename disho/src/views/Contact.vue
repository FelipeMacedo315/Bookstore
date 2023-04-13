<template>
  <main class="contact-page">
    <BreadCrumps>
      <a>Home </a>
      <a>|</a>
      <a>Contact</a>
    </BreadCrumps>
    <img id="img-contact" src="../assets/foto_hortifruti_v07.jpg" alt="fruits-image" />
    <div class="contacts">
      <div class="infos">
        <h1 class="logo">Contact Us</h1>
        <p class="txt-subtitle">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non enim fugit placeat aut, doloremque optio minus quo eos dolor
          pariatur, praesentium debitis inventore commodi natus modi nulla. Voluptas, esse assumenda.
        </p>
        <div class="container-social-media">
          <img class="social-media-icon" src="../assets/facebook.png" alt="facebook-icon" />
          <img class="social-media-icon" src="../assets/instagram.png" alt="facebook-icon" />
          <img class="social-media-icon" src="../assets/whatsapp.png" alt="facebook-icon" />
          <img class="social-media-icon" src="../assets/youtube.png" alt="facebook-icon" />
          <img class="social-media-icon" src="../assets/logotipo-do-linkedin.png" alt="facebook-icon" />
        </div>
      </div>
      <div class="container-img-map">
        <img id="img-map" src="../assets/london.png" alt="image-map-london" />
      </div>
    </div>
    <FeaturesVue />
    <div class="texts-contacts">
      <div class="delivery-terms">
        <h1 class="logo">Delivery Terms</h1>
        <p class="txt-subtitle">
          Integer et lacus vel magna tempus dictum et id nunc. Curabitur sit amet purus a quam luctus hendrerit eu quis neque. Suspendisse
          eget ultrices mi. Donec nec elit ac purus cursus fermentum a eget ligula. Integer nunc risus, aliquet pellentesque accumsan a,
          sagittis vitae quam. Vivamus dictum eros a massa ullamcorper
        </p>
        <p id="txt-topics" class="txt-subtitle">Maecenas id risus fermentum</p>
        <p id="txt-topics" class="txt-subtitle">
          Curabitur at arcu urna. Sed lobortis justo iaculis blandit malesuada. Etiam sit amet enim nec erat malesuada dapibus eget
        </p>
      </div>
      <div class="license-permits">
        <h1 class="logo">Licenses & Permits</h1>
        <p class="txt-subtitle">
          Aliquam pulvinar ligula eu nulla condimentum aliquam. Suspendisse vel condimentum urna. Vivamus ultricies, dui quis pharetra
          posuere, enim leo pretium arcu, convallis consectetur
        </p>
        <p id="txt-topics" class="txt-subtitle">Maecenas id risus fermentum ( 365 Kb)</p>
        <p id="txt-topics" class="txt-subtitle">
          Fusce in arcu nisl. Proin interdum ullamcorper diam. Sed eget placerat neque, sed lacinia libero. Mauris a metus ut dolor gravida
          posuere
        </p>
      </div>
    </div>
    <Promotion />
  </main>
</template>

<script>
import BreadCrumps from "@/components/BreadCrumps.vue";
import FeaturesVue from "@/components/Features.vue";
import Promotion from "@/components/Promotion.vue";

export default {
  components: {
    BreadCrumps,
    FeaturesVue,
    Promotion,
  },
};
</script>

<style lang="scss">
.contact-page {
  #img-contact {
    height: 60vh;
    width: 95%;
    margin-top: 5%;
  }
  .title-container {
    margin: 0vh 0vh 10vh 0vh;
  }
}
.contacts {
  width: 70%;
  box-shadow: 0px 2px 12px rgba(183, 189, 196, 0.503551);
  display: grid;
  grid-template-columns: 50% 50%;
  position: relative;
  left: 15%;
  right: 15%;
  bottom: 20vh;
  .infos {
    background-color: var(--colorWhite);
    h1 {
      padding: 5% 5% 0 5%;
    }
    p {
      padding: 0% 5% 10% 5%;
    }
    img {
      margin-left: 10%;
    }
  }
  .container-img-map {
    height: 100%;
    img {
      border-radius: 0px;
      width: 100%;
      height: 100%;
    }
  }
}

.texts-contacts {
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 5%;
  margin: 0% 2rem;
  padding-bottom: 5%;
  h1 {
    text-align: left;
  }
  p {
    word-wrap: break-word;
    word-break: break-all;
    width: 90%;
    text-align: left;
    margin: 3% 0%;
    font-size: 1rem;
  }
}
.delivery-terms,
.license-permits {
  #txt-topics {
    font-weight: 800;
    margin-left: 1%;
  }
}
</style>
