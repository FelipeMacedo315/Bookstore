<template>
  <div class="gallery">
    <img class="main-image" v-bind:src="imagesProduct[indexMainImage]" />
    <div class="common-container-images-gallery">
      <img
        v-for="(img, index) in imagesProduct"
        v-on:click="viewImage(index)"
        :key="index"
        class="common-images-gallery"
        v-bind:src="img"
        alt=""
      />
    </div>
    <button class="btn-minus" v-on:click="handleSlide('-')">
      <fa id="arrow-tranform" icon="arrow-right"></fa>
    </button>
    <button class="btn-plus" v-on:click="handleSlide('+')">
      <fa icon="arrow-right"></fa>
    </button>
    <button v-on:click="$emit('closeGallery', false)" class="btn-close">
      <fa icon="close"></fa>
    </button>
    <span>{{ paginationSlide }} /{{ imagesProduct.length }}</span>
  </div>
</template>

<script>
export default {
  props: ["imagesProduct"],
  data() {
    return {
      indexMainImage: 0,
      paginationSlide: 1,
    };
  },
  methods: {
    handleSlide(operator) {
      if (operator === "+" && this.indexMainImage < this.imagesProduct.length - 1) {
        this.indexMainImage = this.indexMainImage + 1;
        this.paginationSlide = this.paginationSlide + 1;
      } else if (operator === "-" && this.indexMainImage > 0) {
        this.indexMainImage = this.indexMainImage - 1;
        this.paginationSlide = this.paginationSlide - 1;
      }
    },
    viewImage(indexImg) {
      this.indexMainImage = indexImg;
      this.paginationSlide = indexImg + 1;
    },
  },
};
</script>

<style lang="scss">
.gallery {
  background-color: var(--grayLight);
  width: 80%;
  position: absolute;
  top: 15%;
  left: 10%;
  border: solid 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1vh;
  img {
    border-radius: 0px;
  }
  .main-image {
    object-fit: fill;
    cursor: auto;
  }

  .btn-plus {
    position: absolute;
    bottom: 50%;
    left: 101%;
  }
  .btn-minus {
    position: absolute;
    bottom: 50%;
    right: 101%;
  }
  .btn-close {
    position: absolute;
    top: 2%;
    right: 1%;
  }
  .btn-plus,
  .btn-minus,
  .btn-close {
    background-color: var(--colorText);
    font-size: 5vh;
    color: var(--colorWhite);
    width: 3vw;
    border: none;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  span {
    background-color: var(--colorDisho);
    color: white;
    font-family: viga;
    width: 100%;
    font-size: 1.5rem;
  }
}
.common-container-images-gallery {
  display: flex;
  justify-content: center;
}
.common-images-gallery {
  width: 15%;
  border: solid transparent 1px;
  border-radius: 1rem;
  cursor: pointer;
}
.common-images-gallery:hover {
  border: solid var(--colorText) 1px;
}
#arrow-tranform {
  transform: rotate(180deg);
}
</style>
