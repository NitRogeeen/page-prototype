<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MyHeader"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 300px;
  background-color: #ccc;
  /* width: 100vw; */
}
</style>
