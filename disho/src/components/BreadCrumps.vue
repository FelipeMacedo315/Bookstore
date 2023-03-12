<template>
  <div class="breadCrumps">
    <slot></slot>
  </div>
</template>
<script></script>
<style lang="scss">
.breadCrumps {
  background-color: #ebebeb;
  display: flex;
  align-items: center;
  margin: 0% 2%;
  margin-top: 1vh;
  padding: 1.5rem 0% 1.5rem 20%;
  grid-area: breadCrumps;
  a {
    text-decoration: none;
    font-size: 0.9rem;
    color: var(--colorDisho);
    font-weight: 400;
    font-family: "PT-Sans-Regular";
    padding-left: 1rem;
  }
}
.page-active {
  font-weight: 700;
  color: var(--colorDisho);
  font-style: bold;
  text-decoration: none;
}
</style>
