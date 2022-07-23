<template>
  <div class="main-vue project-home">
    <ProjectHomeHead :title="group.name" :language="group.language.toLocaleUpperCase()"/>
    <ProjectHomeBody :description="group.description" :owner="groupOwner.username" :owner-flag="groupOwner.country" />
    <div class="project-home-delimiter"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import ProjectHomeHead from "@/components/project/molecules/ProjectHomeHead.vue";
import ProjectHomeBody from "@/components/project/molecules/ProjectHomeBody.vue";
import {Group} from "@/object/Group";
import {User} from "@/object/User";

@Options({
  name: "ProjectHomeVue",
  components: {ProjectHomeBody, ProjectHomeHead},
  props: {
    group: {
      type: Group,
      required: true,
    },
    groupOwner: {
      type: User,
      required: true,
    },
  },
})
export default class ProjectHomeVue extends Vue {
}
</script>

<style scoped>
.project-home {
  background-color: #F0F0F0;
  border-radius: 8px;
  padding: 8px;
  text-align: center;
}
.project-home-delimiter {
  height: 8px;
}
</style>
