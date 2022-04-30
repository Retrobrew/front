<template>
  <div class="main-vue project-home">
    <ProjectHomeHead :title="projectTitle" :language="projectLanguage"/>
    <ProjectHomeBody :description="projectDescription" :owner="projectOwner" :collaborators="projectCollaborators"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import ProjectHomeHead from "@/components/project/molecules/ProjectHomeHead.vue";
import ProjectHomeBody from "@/components/project/molecules/ProjectHomeBody.vue";

@Options({
  name: "ProjectHomeVue",
  components: {ProjectHomeBody, ProjectHomeHead},
})
export default class ProjectHomeVue extends Vue {
  private projectTitle = "Pokemon emerald";
  private projectLanguage = "Rust";
  private projectDescription = "Pokemon emerald but it's written in Rust :O";
  private projectOwner = "@Quentin🇫🇷";
  private projectCollaborators = ["@Cédric🇫🇷", "@Amélie🇫🇷"];
}
</script>

<style scoped>
.project-home {
  background-color: #F0F0F0;
  border-radius: 8px;
  padding: 8px;
  text-align: center;
}
</style>
