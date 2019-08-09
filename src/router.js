import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "@/view/MainPage";
import HelloWorld from "@/view/HelloWorld";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: MainPage },
  { path: "/hello", component: HelloWorld }
];

const router = new VueRouter({
  routes,
  mode: "history",
  // scrollBehavior: (to, from, savedPosition) => {
  //   if (savedPosition) {
  //     return savedPosition;
  //   }

  //   if (to.hash) {
  //     return {
  //       selector: to.hash
  //     };
  //   }

  //   return { x: 0, y: 0 };
  // }
  scrollBehavior: async (to, from, savedPosition) => {
    var navbarHeight = window.innerWidth < Vue.$breakPoint ? 50 : 0;
    const findEl = async (hash, x) => {
      return (
        new Promise(resolve => {
          setTimeout(() => {
            resolve(document.querySelector(hash));
          }, 30);
        }) ||
        new Promise(resolve => {
          if (x > 50) {
            return resolve();
          }
          setTimeout(() => {
            resolve(findEl(hash, ++x || 1));
          }, 100);
        })
      );
    };

    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      let el = await findEl(to.hash);
      return window.scrollTo({
        top: el.offsetTop - navbarHeight,
        behavior: "smooth"
      });
    } else {
      return window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
});

export default router;
