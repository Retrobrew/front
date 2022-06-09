<template>
  <p class="project-home-body-description">{{description}}</p>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "ProjectHomeDescription",
  props: {
    description: String,
  }
})
export default class ProjectHomeDescription extends Vue {
}
</script>

<style scoped>
.project-home-body-description {
  text-align: start;
  margin-left: 24px;
  padding: 0;
}
</style>
