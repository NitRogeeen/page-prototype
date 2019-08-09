<template>
  <div class="container">
    <button class="navbtn" @click="navBtnClick" :class="{ show: navIsShow }">Menu</button>
    <div class="nav" :class="navIsShow ? navClassShow : navClassHide" @click="click()">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MobileNavbar",
  data() {
    return {
      navClass: "normal",
      navIsShow: false,
      navClassShow: "show",
      navClassHide: "hide"
    };
  },
  computed: {
    navContents() {
      return this.links;
    }
  },
  methods: {
    click() {
      this.navIsShow = !this.navIsShow;
    },
    navBtnClick() {
      this.navIsShow = !this.navIsShow;
    }
  }
};
</script>

<style lang="scss" scoped>
$height: 50px;

.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  .navbtn {
    display: inline-block;
    position: fixed;
    top: 0;
    width: 50px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0);
    z-index: 999;

    transition: color 1000ms ease;
    &.show {
      color: white;
    }
  }

  .nav {
    position: fixed;
    top: 0;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    width: 100%;
    transition: transform 500ms ease;

    &.show {
      transform: translateX(0);
    }
    &.hide {
      transform: translateX(100%);
    }

    ul {
      list-style: none;
      margin-top: 50px;
      li {
        width: 100%;
        height: $height;
        line-height: $height;
        text-align: center;
        cursor: pointer;

        transition: background-color 250ms ease, color 250ms ease;

        &:hover {
          background-color: rgba(255, 255, 255, 0.8);
          color: black;
        }
      }
    }
  }
}
</style>
