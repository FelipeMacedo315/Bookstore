<template>
  <menu>
    <div class="container-logo">
      <h1 class="logo">Disho</h1>
    </div>
    <ul class="sections-menu">
      <router-link to="/"> Home </router-link>
      <router-link to="/shop"> Shop </router-link>
      <li>Blog</li>
      <li>Contacts</li>
    </ul>
    <Input typeInput="search" placeholder="Search for product..." />
    <div class="circle-container">
      <Circle imgCircle="user.png" circleClass="circle-small" />
      <Circle imgCircle="shopping.png" circleClass="circle-small" />
    </div>
  </menu>
</template>

<script>
import Input from "../components/Input.vue";
import Circle from "./Circle.vue";
export default {
  components: {
    Input,
    Circle,
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
</style>
