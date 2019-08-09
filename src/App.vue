<template>
  <div id="app">
    <header>
      <my-header>Header
        <nav>
          <navbar mode="fixed">
            <ul>
              <li v-for="item in navLink" :key="item.name" @click="navClick(item)">{{ item.label }}</li>
            </ul>
          </navbar>
        </nav>
      </my-header>
    </header>
    <transition>
      <router-view/>
    </transition>
    <footer>
      <my-footer>Footer</my-footer>
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/MyFooter";

const navLink = [
  { name: "Top", label: "Top", path: "/", hash: "" },
  { name: "Page1", label: "Page1", path: "/", hash: "page1" },
  { name: "Page2", label: "Page2", path: "/", hash: "page2" },
  { name: "Page3", label: "Page3", path: "/", hash: "page3" },
  { name: "Hello", label: "Hello", path: "/hello", hash: "" }
];

export default {
  name: "App",
  components: {
    Navbar,
    MyHeader,
    MyFooter
  },
  computed: {
    navLink() {
      return navLink;
    }
  },
  methods: {
    navClick(item) {
      if (this.$route.path !== item.path) {
        var hash = item.hash ? `#${item.hash}` : "";
        this.$router.push(`${item.path}${hash}`);
      } else {
        // this.$router.push(item.path);
        this.pageScroll(item.hash);
      }
    },
    pageScroll(anchor) {
      var scrollPosY = 0;
      var el = document.getElementById(anchor);
      if (el) {
        var rect = el.getBoundingClientRect();
        scrollPosY = rect.top + window.pageYOffset;
        if (window.innerWidth > this.$breakPoint) {
          scrollPosY -= 50;
        }
      }
      window.scrollTo({ top: scrollPosY, behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "roboto", "M PLUS Rounded 1c", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  header {
    position: relative;
  }
  footer {
    mergin-top: auto;
  }
}
</style>
