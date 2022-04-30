<template>
  <div>
    <ProjectHomeDescription :description="description" />
    <div class="project-home-body-user-list">
      <ProjectHomeOwner :owner="owner" />
      <ProjectHomeCollaborators :collaborators="collaborators" />
    </div>
    <ProjectHomeButton />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import ProjectHomeDescription from "@/components/project/atoms/ProjectHomeDescription.vue";
import ProjectHomeOwner from "@/components/project/atoms/ProjectHomeOwner.vue";
import ProjectHomeCollaborators from "@/components/project/atoms/ProjectHomeCollaborators.vue";
import ProjectHomeButton from "@/components/project/atoms/ProjectHomeButton.vue";

@Options({
  name: "ProjectHomeBody",
  components: {ProjectHomeButton, ProjectHomeCollaborators, ProjectHomeOwner, ProjectHomeDescription},
  props: {
    description: String,
    owner: String,
    collaborators: Array,
  }
})
export default class ProjectHomeBody extends Vue {
}
</script>

<style scoped>
.project-home-body-user-list {
  display: flex;
  justify-content: space-evenly;
}
</style>
