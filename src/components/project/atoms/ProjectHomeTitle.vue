<template>
  <p class="project-home-head-title">{{title}}</p>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "ProjectHomeTitle",
  props: {
    title: String
  }
})
export default class ProjectHomeTitle extends Vue{
}
</script>

<style scoped>
.project-home-head-title {
  font-size: 1.5em;
  font-weight: 600;
  margin: 0;
  padding: 0;
}
</style>
