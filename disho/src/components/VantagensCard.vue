<template>
  <div class="container-slides">
    <div class="card-vantagens">
      <div class="container-icon">
        <span> <fa icon="truck"></fa></span>
      </div>
      <div class="text-vantagens">
        <h2 class="txt-title">Fast Delivery</h2>
        <p class="txt-subtitle">Within 2-3 hours after ordering</p>
      </div>
    </div>
    <div class="card-vantagens">
      <div class="container-icon">
        <span> <fa icon="clock"></fa></span>
      </div>
      <div class="text-vantagens">
        <h2 class="txt-title">Opening Hours</h2>
        <p class="txt-subtitle">Mon.-Fri.: 9.00 am- 9.00 pm</p>
      </div>
    </div>
    <div class="card-vantagens">
      <div class="container-icon">
        <span> <fa icon="leaf"></fa></span>
      </div>
      <div class="text-vantagens">
        <h2 class="txt-title">Eco-friendly packaging</h2>
        <p class="txt-subtitle">Sustainable materials</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.card-vantagens {
  background-color: var(--colorWhite);
  box-shadow: 0px 2px 12px rgba(183, 189, 196, 0.503551);
  border-radius: 12px;
  width: 30%;
  display: flex;
  align-items: center;
  padding: 1.5% 0%;
}
.container-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  span {
    font-size: 7vh;
    color: var(--colorText);
  }
}

.text-vantagens {
  width: 60%;
  text-align: left;
  border-left: 2px solid var(--grayLight);
  padding-left: 10%;
  h2 {
    color: var(--colorDisho);
    font-family: viga;
    font-size: 2rem;
  }
  p {
    color: var(--colorText);
    font-family: PT-Sans-Regular;
    font-size: 1.3rem;
  }
}
</style>
