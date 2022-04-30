<template>
  <div class="project-home-head">
    <ProjectHomeTitle :title="title"/>
    <ProjectHomeLanguage :language="language"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import ProjectHomeTitle from "@/components/project/atoms/ProjectHomeTitle.vue";
import ProjectHomeLanguage from "@/components/project/atoms/ProjectHomeLanguage.vue";

@Options({
  name: "ProjectHomeHead",
  components: {ProjectHomeLanguage, ProjectHomeTitle},
  props: {
    title: String,
    language: String,
  }
})
export default class ProjectHomeHead extends Vue {
}
</script>

<style scoped>
.project-home-head {
  display: flex;
  justify-content: space-between;
  margin: 8px 24px;
}
</style>
