<template>
  <div class="parent-nav-bar" v-resize="handleResize">
    <mobile-navbar v-show="isMobile">
      <slot></slot>
    </mobile-navbar>
    <pc-navbar v-show="!isMobile" :mode="mode">
      <slot></slot>
    </pc-navbar>
  </div>
</template>

<script>
import PcNavbar from "@/components/core/PcNavbar";
import MobileNavbar from "@/components/core/MobileNavbar";

export default {
  name: "Navbar",
  components: {
    PcNavbar,
    MobileNavbar
  },
  props: {
    mode: { type: String, default: "normal" }
  },
  data() {
    return {
      navClass: "normal",
      scnWidth: "",
      isMobile: false
    };
  },
  mounted() {
    this.handleResize();
  },
  methods: {
    handleResize() {
      this.scnWidth = window.innerWidth;
      this.isMobile = this.scnWidth < this.$breakPoint;
    }
  }
};
</script>
