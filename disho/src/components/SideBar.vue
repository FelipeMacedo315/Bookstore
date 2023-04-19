<template>
  <div class="sidebar">
    <fa id="close-icon-sidebar" v-on:click="$emit('closeSideBar', false)" v-show="sidebarResponsive" icon="close"></fa>
    <h1>Shop Products</h1>
    <div class="divider-title"></div>

    <div class="filter">
      <h1 class="filter-title">Product Filters</h1>
      <div class="categories">
        <h2>Categories:</h2>
        <div class="divider-categories"></div>
        <ul>
          <li v-on:click="changeCategory('fruits')">
            <span> <fa icon="apple-alt"></fa> Fruits </span>
          </li>
          <li v-on:click="changeCategory('vegetables')">
            <span> <fa icon="seedling"></fa> Vegetables </span>
          </li>
          <li v-on:click="changeCategory('cereals')">
            <span><fa icon="spoon"></fa> Cereals </span>
          </li>
        </ul>
        <h2>Price Range:</h2>
        <div class="divider-price-range"></div>
        <input
          v-on:change="currentValueRange = $event.target.value"
          type="range"
          min="1"
          v-bind:max="rangeMaxPrice"
          v-bind:value="currentValueRange"
          step="0.50"
        />
        <p>Price: ${{ currentValueRange }} - {{ rangeMaxPrice }}</p>

        <h2>Produtcs Tags:</h2>
        <div class="divider-categories"></div>
        <div class="tags">
          <span v-bind:class="tagKey === 'banana' ? 'tag-active' : 'tag-inactive'" v-on:click="captureTags($event)">banana</span>
          <span v-bind:class="tagKey === 'abacaxi' ? 'tag-active' : 'tag-inactive'" v-on:click="captureTags($event)"
            >abacaxi</span
          >
          <span v-bind:class="tagKey === 'melancia' ? 'tag-active' : 'tag-inactive'" v-on:click="captureTags($event)"
            >melancia</span
          >
          <span v-bind:class="tagKey === 'uva' ? 'tag-active' : 'tag-inactive'" v-on:click="captureTags($event)">uva</span>
          <span v-bind:class="tagKey === 'laranja' ? 'tag-active' : 'tag-inactive'" v-on:click="captureTags($event)"
            >laranja</span
          >
        </div>
        <div class="btns-container">
          <Button
            v-on:click="captureCondicionsFilter($event)"
            content="Apply Filter"
            btnClass="btn-green"
            v-bind:btnDisable="btnStatus"
          />
          <Button v-on:click="clearConditions" content="Clear All" btnClass="btn-white" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { mapActions, mapState } from "vuex";
import Button from "./Button.vue";
export default {
  components: {
    Button,
  },
  computed: {
    ...mapActions["navigate"],
    ...mapState["currentPage"],
  },
  mounted() {
    if (window.screen.width < 768) {
      this.sidebarResponsive = true;
    }
  },
  data() {
    return {
      rangeMaxPrice: 60,
      currentValueRange: 1,
      tagKey: "",
      tagClass: "tag-inactive",
      btnStatus: false,
      sidebarResponsive: false,
    };
  },
  methods: {
    changeCategory(value) {
      store.dispatch("navigate", value);
      store.dispatch("actionCurrentPage", 1);
    },
    captureTags(event) {
      this.tagKey = event.target.innerText;
    },
    captureCondicionsFilter(element) {
      this.$emit("filterCondicions", {
        currentTag: this.tagKey,
        currentValue: this.currentValueRange,
      });
      this.btnStatus = true;
      window.scrollTo(0, 0);
    },
    clearConditions() {
      window.scrollTo(0, 0);
      this.tagKey = "";
      this.currentValueRange = 1;
      this.$emit("restartProducts", true);
      this.btnStatus = false;
    },
  },
};
</script>

<style lang="scss">
.sidebar {
  width: 30%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 5%;
  grid-area: sidebar;
}
.divider-title {
  margin: 3vh 0vh 8vh 0vh;
  width: 25%;
  height: 0.3rem;
  background-color: var(--colorBtn);
}
.divider-categories {
  margin: 0vh 0vh 2vh 0vh;
  width: 25%;
  height: 0.3rem;
  background-color: #fec740;
}
.divider-price-range {
  margin: 0vh 0vh 2vh 0vh;
  width: 25%;
  height: 0.3rem;
  background-color: var(--colorBtn);
}
.filter {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.filter-title {
  font-size: 1.6rem;
  font-weight: 400;
  background-color: var(--colorBtn);
  font-family: viga;
  color: var(--colorWhite);
  padding: 2% 4%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.categories {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 0% 15% 10% 5%;
  background-color: var(--colorWhite);
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  h2 {
    margin-top: 15%;
  }
  li {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-top: 10%;
    font-size: 1.3rem;
    svg {
      padding-right: 2vw;
      opacity: 0.6;
    }
    span {
      font-family: PT-Sans-Regular;
      color: var(--colorText);
      font-weight: 400;
      cursor: pointer;
    }
  }

  p {
    font-size: 1.2rem;
    font-family: "PT-Sans-Regular";
    color: var(--colorText);
    font-weight: 400;
  }
}
li:hover {
  span,
  svg {
    opacity: 1;
    font-weight: 700;
  }
}
input[type="range"] {
  width: 100%;
}

.tags {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  row-gap: 2vh;
}
.tag-inactive {
  border: solid 1px var(--grayLight);
  border-radius: 15px;
  font-size: 0.8rem;
  color: var(--colorDisho);
  font-weight: 700;
  padding: 2% 4%;
  cursor: pointer;
}
.tag-active {
  border: solid 1px var(--grayLight);
  border-radius: 15px;
  font-size: 0.8rem;
  color: var(--colorWhite);
  background-color: var(--colorDisho);
  font-weight: 700;
  padding: 2% 4%;
  cursor: pointer;
}

.btns-container {
  background-color: var(--colorWhite);
  display: flex;
  flex-direction: column;
  row-gap: 3vh;
  width: 100%;
  padding-top: 10%;
  padding-bottom: 20%;
}
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    background-color: white;
  }
  #close-icon-sidebar {
    margin-left: 90%;
    margin-top: 5%;
    height: 5vh;
  }
}
</style>
