<template>
  <div class="form">
    <fa id="close-icon" v-on:click="modalClose" icon="close"></fa>
    <h1 class="txt-title">{{ mission }}</h1>
    <form>
      <label v-for="field in fields" class="txt-subtitle">
        {{ field }}
        <input v-on:change="checkForm($event)" v-bind:name="field" v-bind:type="field" />
        <!-- check field NAME  -->
        <small v-if="field === 'Name' && name === 'invalid'"> {{ field }} Minimum 2 caracter </small>
        <small v-else></small>
        <!-- check field EMAIL -->
        <small v-if="field === 'Email' && email === 'invalid'"> {{ field }} invalido </small>
        <small v-else></small>
        <!-- check field PASSWORD -->
        <small v-if="field === 'Password' && password === 'invalid'"> {{ field }} Minimum 3 caracter</small>
        <small v-else></small>
      </label>
    </form>
    <button v-on:click="handleLogin_Registered">{{ mission }}</button>
    <p v-if="option === 'Login'" v-on:click="$emit('loggin', true)">
      Already have an account ? <span class="option">{{ option }}</span>
    </p>
    <p v-else v-on:click="$emit('loggin', false)">
      Don't have an account <span class="option">{{ option }}</span>
    </p>
    <!-- teste animaçao -->
    <Feedback v-show="showFeedBack" v-bind:content="contentFeedback" />
  </div>
</template>

<script>
import store from "@/store";
import Feedback from "./FeedBack.vue";
import axios from "axios";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    Feedback,
  },
  computed: {
    ...mapActions("user", ["actOpenModal"]),
    ...mapState("user", ["name", "email", "password"]),
  },
  props: ["fields", "mission", "option", "urlServer"],
  mounted() {
    store.dispatch("user/checkEmail", "", { root: true });
    store.dispatch("user/checkPassword", "", { root: true });
  },
  data() {
    return {
      logged: false,
      showFeedBack: false,
      contentFeedback: "",
    };
  },
  methods: {
    checkForm(event) {
      if (event.target.name === "Name") {
        store.dispatch("user/checkName", event.target.value, { root: true });
        // alert(this.$store.state.user.user.email);
      }
      if (event.target.name === "Email") {
        store.dispatch("user/checkEmail", event.target.value, { root: true });
        // alert(this.$store.state.user.user.email);
      }
      if (event.target.name === "Password") {
        store.dispatch("user/checkPassword", event.target.value, { root: true });
      }
    },
    handleLogin_Registered() {
      if (
        this.mission === "Login" &&
        this.email !== "invalid" &&
        this.email !== "" &&
        this.password !== "invalid" &&
        this.password !== ""
      ) {
        let bodySend = { email: this.email, password: this.password };
        this.sendform(bodySend);
      }

      if (
        this.mission !== "Login" &&
        this.name !== "invalid" &&
        this.name !== "" &&
        this.email !== "invalid" &&
        this.email !== "" &&
        this.password !== "invalid" &&
        this.password !== ""
      ) {
        let bodySend = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
        this.sendform(bodySend);
      }
    },
    sendform(bodySend) {
      axios
        .post(this.urlServer, bodySend)
        .then((result) => {
          this.showFeedBack = true;
          this.contentFeedback = result.data.msg;
          localStorage.setItem("logged", true);
          localStorage.setItem("token", result.data.token);
          console.log(result);
          setTimeout(() => {
            this.showFeedBack = false;
            store.dispatch("user/actOpenModal", false);
            window.location.reload();
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
          this.showFeedBack = true;
          this.contentFeedback = err.response.data.msg;
        });
    },
    modalClose() {
      store.dispatch("user/actOpenModal", false);
    },
  },
};
</script>

<style lang="scss">
.form {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 100%;
  padding-bottom: 1%;
  h1 {
    padding: 10% 0%;
  }
  button {
    width: 50%;
    margin: 5% 0%;
    padding: 3% 1%;
    font-size: 1.1rem;
    font-family: "viga";
    color: white;
    background-color: var(--colorDisho);
    &:hover {
      background-color: var(--colorText);
      cursor: pointer;
    }
  }
}
#close-icon {
  margin-left: 90%;
  margin-top: 2%;
  height: 2rem;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-left: 10%;
}
label {
  text-align: center;
  display: grid;
  grid-template-columns: 30% 50%;
  align-items: center;
  justify-content: start;
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

small {
  color: red;
  grid-column-start: 2;
  font-family: PT-Sans-Regular;
  font-size: 0.8rem;
  padding: 2px;
}
@media (max-width: 768px) {
  .form {
    width: 100%;
  }
}
</style>
