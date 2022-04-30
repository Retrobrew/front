<template>
  <div class="project-home-body-collaborators">
    <p style="font-weight: 500">Collaborator{{collaborators.length > 1 ? 's' : ''}}:</p>
    <p v-for="(user, index) in collaborators" :key="index">{{user}}</p>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "ProjectHomeCollaborators",
  props: {
    collaborators: Array
  }
})
export default class ProjectHomeCollaborators extends Vue {
}
</script>

<style scoped>
.project-home-body-collaborators {
  text-align: start;
}
.project-home-body-collaborators p {
  margin: 2px 0;
  padding: 0;
}
</style>
