<template>
  <HeaderVue />
  <div class="error-card">
    <h1>404 - Page not found</h1>
    <p>It seems like this page does not exist, we recommend you <a href="/">go back to the home page</a></p>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import HeaderVue from "@/components/header/HeaderVue.vue";

@Options({
  name: "Error404",
  components: {HeaderVue}
})
export default class Error404 extends Vue{
}
</script>

<style scoped>
.error-card {
  text-align: center;
  margin: 10vh auto;
}
</style>
