<template>
  <div class="container version-card p-2">
    <VersionTitle :title="repositoryTitle"/>
    <VersionBody
        :version-number="repositoryVersion"
        :version-language="repositoryLanguage"
        :project-id="group.uuid"
    />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import VersionTitle from "@/components/repository/atoms/VersionTitle.vue";
import VersionBody from "@/components/repository/molecules/VersionBody.vue";
import {Group} from "@/object/Group";

@Options({
  name: "RepositoryVersionVue",
  components: {
    VersionBody,
    VersionTitle
  },
  props: {
    group: {
      type: Group,
      required: true
    }
  }
})
export default class RepositoryVersionVue extends Vue {
  private repositoryTitle = "final game";
  private repositoryVersion = "1.0";
  private repositoryLanguage = "Rust";
}
</script>

<style scoped>
.version-card {
  background-color: #F0F0F0;
  border-radius: 8px;
}
</style>
