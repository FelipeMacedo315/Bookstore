<template>
  <div class="sign">
    <div class="ilustrator">
      <h1 class="logo">Disho</h1>
      <h2 class="txt-subtitle">Welcome to <span class="logo">Disho</span></h2>
      <p class="txt-subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, esse voluptas modi eaque nostrum dolor
        laboriosam aliquam excepturi reiciendis praesentium, voluptatem provident culpa voluptate nemo illum, facere
        delectus ut assumenda!
      </p>
    </div>
    <component class="form" v-if="haveCount">
      <FormRegistered
        v-on:emitterToModal="receiverChildForm"
        v-on:loggin="handleLogin"
        v-bind:fields="['Email', 'Password']"
        mission="Login"
        option="Create Account"
        urlServer="http://localhost:3000/DishoApi/User/Login"
      />
    </component>
    <component class="form" v-else>
      <FormRegistered
        v-on:emitterToModal="receiverChildForm"
        v-on:loggin="handleLogin"
        v-bind:fields="['Name', 'Email', 'Password']"
        mission="Create Account"
        option="Login"
        urlServer="http://localhost:3000/DishoApi/User/create-user"
      />
    </component>
  </div>
</template>

<script>
import FormRegistered from "./FormRegistered.vue";
export default {
  props: ["closeModal"],
  components: {
    FormRegistered,
  },
  data() {
    return {
      Logged: true,
      haveCount: false,
    };
  },
  methods: {
    handleLogin(childValue) {
      this.haveCount = childValue;
    },
    receiverChildForm(childValue) {
      this.$emit("emitterToSingleCard", childValue);
    },
  },
};
</script>

<style lang="scss">
.sign {
  width: 70vw;
  height: 80vh;
  position: absolute;
  top: 15%;
  right: 15%;
  border: solid;
  display: grid;
  grid-template-columns: 50% 50%;
}
.ilustrator {
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 2rem;
  padding: 0% 10%;
  h1 {
    font-size: 3rem;
    padding: 5% 0%;
  }
  h2 {
    padding: 5% 0%;
  }
  span {
    font-size: 2rem;
  }
  p {
    font-size: 1.2rem;
  }
}
</style>
