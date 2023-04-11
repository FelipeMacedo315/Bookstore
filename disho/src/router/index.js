import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import BuyProduct from "../views/BuyProduct.vue";
import ShoppingCart from "../views/ShoppingCart.vue";
import SinglePost from "../views/SinglePost.vue";
import Blog from "../views/Blog.vue";
import Contact from "@/views/Contact.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/shop/product/:id",
    name: "buyProduct",
    component: BuyProduct,
  },
  { path: "/ShoppingCart/:id", name: "shoppingCart", component: ShoppingCart },
  {
    path: "/singlePost/:idNotice",
    name: "singlePost",
    component: SinglePost,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "page-active",
});

export default router;
