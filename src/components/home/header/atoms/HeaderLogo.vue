<template>
  <a href="/">
    <img src="../../../../assets/logo.svg">
  </a>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class HeaderLogo extends Vue {}
</script>

<style scoped>
a {
  margin: auto auto auto 10vw;
}
img {
  margin: auto;
  min-height: 40px;
  height: 80%;
  max-height: 48px;
}
</style>
