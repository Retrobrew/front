<template>
  <div class="project-home-body-owner">
    <p style="font-weight: 500">Owner</p>
    <p>{{owner}}</p>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "ProjectHomeOwner",
  props: {
    owner: String,
  }
})
export default class ProjectHomeOwner extends Vue{
}
</script>

<style scoped>
.project-home-body-owner {
  text-align: start;
}
.project-home-body-owner p {
  margin: 2px 0;
  padding: 0;
}
</style>
