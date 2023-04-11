<template>
  <div class="field-container">
    <input v-bind:type="typeInput" v-bind:placeholder="placeholder" />
    <button>
      <fa id="icon-glass" icon="magnifying-glass"></fa>
    </button>
  </div>
</template>

<script>
export default {
  props: ["typeInput", "placeholder"],
};
</script>

<style lang="scss">
.field-container {
  height: 50%;
  width: 30vw;
  display: flex;
  justify-content: center;
  flex-direction: row;
  button {
    height: 100%;
    width: 20%;
    background-color: var(--colorBtn);
    border: none;
    border-top-right-radius: 26px;
    border-bottom-right-radius: 26px;
    img {
      filter: invert(100%);
    }
  }
  input {
    font-size: 1rem;
    box-sizing: content-box;
    border-radius: 26px 0px 0px 26px;
    width: 75%;
    box-sizing: border-box;
    border: 1px solid var(--grayLight);
    font-family: Pt-Sans-Regular;
    padding-left: 5%;

    &::placeholder {
      padding-left: 5%;
      color: var(--colorPlaceholder);
    }
  }
  #icon-glass {
    color: white;
    font-size: 1.5rem;
  }
}
</style>
