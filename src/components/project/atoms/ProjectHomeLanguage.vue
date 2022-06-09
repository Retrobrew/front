<template>
  <p class="project-home-head-language">{{language}}</p>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "ProjectHomeLanguage",
  props: {
    language: String,
  }
})
export default class ProjectHomeLanguage extends Vue {
}
</script>

<style scoped>
.project-home-head-language {
  background-color: #8b8bff;
  border-radius: 4px;
  color: #FFFFFF;
  padding: 2px 8px;
}
</style>
