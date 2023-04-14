<template>
  <menu>
    <div class="container-logo">
      <h1 class="logo">Disho</h1>
    </div>
    <ul class="sections-menu">
      <router-link to="/"> Home </router-link>
      <router-link to="/shop"> Shop </router-link>
      <router-link to="/blog"> Blog </router-link>
      <router-link to="/contact">Contact</router-link>
    </ul>
    <FieldInput typeInput="search" placeholder="Search for product..." />
    <div class="circle-container">
      <Circle v-on:click="navigateToCart" background="#ffffff" color="#264653" size="8vh">
        <fa icon="cart-shopping"></fa>
      </Circle>
      <Circle v-on:click="handleAccountConfig" background="#ffffff" color="#264653" size="8vh">
        <fa icon="user"></fa>
      </Circle>
    </div>
    <ModalLoginVue v-show="showModal" />
    <div v-show="showAccountConfig === true && showModal === false" class="account-config">
      <h4 class="txt-title">
        <fa icon="user"></fa>
        User
      </h4>
      <li class="txt-subtitle">Change Password</li>
      <li class="txt-subtitle">Change Email</li>
      <li v-on:click="logout" v-if="logged === 'true'" id="logout" class="txt-subtitle">Logout</li>
      <li v-on:click="modalOpen" v-else id="logout" class="txt-subtitle">Login</li>
    </div>
  </menu>
</template>

<script>
import FieldInput from "./FieldInput.vue";
import Circle from "./Circle.vue";
import ModalLoginVue from "./ModalLogin.vue";
import { mapActions, mapState } from "vuex";
import store from "@/store";

export default {
  components: {
    FieldInput,
    Circle,
    ModalLoginVue,
  },
  mounted() {
    this.logged = localStorage.getItem("logged");
    this.showAccountConfig = false;
  },
  computed: {
    ...mapState("user", ["showModal"]),
    ...mapActions("user", ["actOpenModal"]),
  },
  data() {
    return {
      showAccountConfig: false,
      logged: "",
    };
  },
  methods: {
    navigateToCart() {
      if (localStorage.getItem("token")) {
        this.$router.push(`/ShoppingCart/${localStorage.getItem("token")}`);
      } else {
        store.dispatch("user/actOpenModal", true);
      }
    },
    handleAccountConfig() {
      if (this.showModal === true) {
        this.showAccountConfig = false;
      } else {
        this.showAccountConfig = !this.showAccountConfig;
      }
    },
    modalOpen() {
      store.dispatch("user/actOpenModal", true);
      this.showAccountConfig = false;
    },
    logout() {
      localStorage.clear();
      window.location.reload();
    },
  },
};
</script>

<style lang="scss">
menu {
  height: 15vh;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0% 2rem;
  a {
    text-decoration: none;
    font-size: 1rem;
    color: var(--colorDisho);
    font-weight: 400;
    font-family: "PT-Sans-Regular";
  }
}
.container-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  font-family: viga;
  font-size: 32px;
  color: var(--colorDisho);
}
.sections-menu {
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  li {
    color: var(--colorText);
    list-style: none;
  }
}
.circle-container {
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.account-config {
  background-color: var(--colorWhite);
  position: absolute;
  top: 20%;
  left: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  line-height: 5vh;
  animation-name: showAccount;
  animation-duration: 0.5s;
  h4 {
    padding: 5% 0%;
    font-size: 1.5em;
  }
  li {
    list-style: none;
    border: 1px solid var(--grayLight);
    border-bottom: 0px;
    width: 100%;
    font-size: 1em;
    text-align: center;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      background-color: var(--grayLight);
    }
  }
  #logout {
    background-color: #eb3e23;
    color: var(--colorWhite);
    &:hover {
      background-color: #cf2f1a;
    }
  }
}
@keyframes showAccount {
  from {
    top: 0%;
    left: 80%;
  }
  to {
    top: 20%;
    left: 80%;
  }
}
</style>
