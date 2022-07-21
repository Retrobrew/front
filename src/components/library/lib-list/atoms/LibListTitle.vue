<template>
  <p class="lib-list-title">Public libraries</p>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
})
export default class LibListTitle extends Vue {
}
</script>

<style scoped>
.lib-list-title {
  text-align: center;
  font-size: 1.6em;
  font-weight: bold;
}
</style>
