<template>
  <div class="version-card-title mb-2">{{title}}</div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "VersionTitle",
  props: {
    title: String,
  }
})
export default class VersionTitle extends Vue {
}
</script>

<style scoped>
.version-card-title {
  text-align: center;
  text-transform: uppercase;
  font-size: 1.6em;
}
</style>
