<template>
  <div class="navbar" ref="navbar" :class="navClass" v-scroll="handleScroll">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PcNavbar",
  props: {
    mode: { type: String, default: "normal" }
  },
  data() {
    return {
      navClass: "normal",
      initPos: ""
    };
  },
  mounted() {
    this.initPos = this.$refs.navbar.getBoundingClientRect().top;
  },
  computed: {
    navContents() {
      return this.links;
    }
  },
  methods: {
    handleScroll() {
      if (this.mode === "normal") return;
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (this.initPos > scrollTop) {
        this.navClass = "normal";
      } else {
        this.navClass = "fixed";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$height: 50px;
.navbar {
  width: 100%;
  &.normal {
    position: absolute;
    bottom: 0px;
    background-color: transparent;
    li {
      &:hover {
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
      }
    }
  }
  &.fixed {
    position: fixed;
    top: 0px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    li {
      &:hover {
        background-color: rgba(255, 255, 255, 0.8);
        color: black;
      }
    }
  }
  ul {
    width: 100%;
    text-align: center;
    transition: background-color 100ms linear, color 100ms linear;
    li {
      height: $height;
      line-height: $height;
      width: 150px;
      text-align: center;
      padding: 0 10px;
      display: inline-block;
      cursor: pointer;
      transition: background-color 250ms ease, color 250ms ease;
    }
  }
}
</style>
