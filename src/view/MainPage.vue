<template>
  <div class="main-page">
    <div id="page1">page1</div>
    {{ message }}
    <div class="blank"></div>
    <div id="page2">page2</div>
    <div class="blank"></div>
    <div id="page3">page3</div>
    <div class="blank"></div>
  </div>
</template>

<script>
export default {
  name: "MainPage",
  computed: {
    message() {
      return this.$store.state.message;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blank {
  height: 1500px;
}
</style>
