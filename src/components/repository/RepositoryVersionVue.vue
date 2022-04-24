<template>
  <div class="version-card">
    <VersionTitle :title="repositoryTitle"/>
    <VersionBody :version-number="repositoryVersion" :version-language="repositoryLanguage"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import VersionTitle from "@/components/repository/atoms/VersionTitle.vue";
import VersionBody from "@/components/repository/molecules/VersionBody.vue";

@Options({
  name: "RepositoryVersionVue",
  components: {VersionBody, VersionTitle}
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
  margin: 8px auto;
  border-radius: 8px;
  width: 100%;
}
</style>
