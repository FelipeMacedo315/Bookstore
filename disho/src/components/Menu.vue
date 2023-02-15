<template>
  <menu>
    <div class="container-logo">
      <h1 class="logo">Disho</h1>
    </div>
    <ul class="sections-menu">
      <li>Home</li>
      <li>Shop</li>
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
