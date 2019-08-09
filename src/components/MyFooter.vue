<template>
  <div class="footer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MyFooter"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  height: 300px;
  background-color: black;
  color: white;
}
</style>
