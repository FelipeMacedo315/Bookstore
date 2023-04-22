<template>
  <div class="sign">
    <div class="ilustrator">
      <h1 class="logo">Disho</h1>
      <h2 class="txt-subtitle">Welcome to <span class="logo">Disho</span></h2>
      <p class="txt-subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, esse voluptas modi eaque nostrum dolor laboriosam aliquam
        excepturi reiciendis praesentium, voluptatem provident culpa voluptate nemo illum, facere delectus ut assumenda!
      </p>
    </div>
    <component class="form" v-if="haveCount">
      <FormRegistered
        v-on:loggin="handleLogin"
        v-bind:fields="['Email', 'Password']"
        mission="Login"
        option="Create Account"
        urlServer="http://localhost:3000/DishoApi/User/Login"
      />
    </component>
    <component class="form" v-else>
      <FormRegistered
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
  },
};
</script>

<style lang="scss">
.sign {
  width: 70vw;
  position: absolute;
  top: 15%;
  right: 15%;
  border: solid 1px var(--colorText);
  display: flex;
  flex-direction: row;
}
.ilustrator {
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  line-height: 2rem;
  padding: 10% 5% 0% 5%;
  width: 50%;
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
@media (max-width: 768px) {
  .sign {
    width: 100%;
    flex-direction: column-reverse;
    right: 0;
  }
  .ilustrator {
    width: 100%;
    padding: 0;
  }
}
</style>
