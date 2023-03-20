<template>
  <div class="form">
    <h1 class="txt-title">{{ mission }}</h1>
    <form>
      <label v-for="field in fields" class="txt-subtitle" for="field">
        {{ field }}
        <input v-bind:type="field" />
      </label>
    </form>
    <button>{{ mission }}</button>
    <p v-if="option === 'Login'" v-on:click="$emit('loggin', true)">
      Already have an account ? <span class="option">{{ option }}</span>
    </p>
    <p v-else v-on:click="$emit('loggin', false)">
      Don't have an account <span class="option">{{ option }}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ["fields", "mission", "option"],
  data() {
    return {
      logged: false,
    };
  },
};
</script>

<style lang="scss">
.form {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 3rem;
  padding: 0% 10%;
  text-align: center;

  h1 {
    padding: 10% 0%;
  }
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
label {
  text-align: center;
  display: grid;
  grid-template-columns: 30% 60%;
  align-items: center;
}
input {
  padding: 2%;
  font-size: 1rem;
  font-family: "PT-Sans-Regular";
}
.option {
  font-family: "viga";
  font-weight: 300;
  font-size: 1.3rem;
  color: var(--colorText);
  &:hover {
    font-weight: 700;
    cursor: pointer;
  }
}
button {
  width: 50%;
  margin: 5% 0%;
  padding: 3% 1%;
  font-size: 1.1rem;
  font-family: "viga";
  color: white;
  background-color: var(--colorDisho);
}
</style>
