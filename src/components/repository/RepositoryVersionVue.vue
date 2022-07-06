<template>
  <div class="container version-card p-2">
    <VersionTitle :title="repositoryTitle"/>
    <VersionBody
        :key="reload"
        :version-number="repositoryVersion"
        :version-language="repositoryLanguage"
        :project-id="group.uuid"
        v-on:select-file="selectedFile = $event; showNewFileForm = false"
        v-on:new-file="showNewFileForm = true"
    />
  </div>
  <IDEVue
      :project-id="group.uuid"
      :current-file="selectedFile"
      :key="selectedFile"
      v-if="selectedFile && !showNewFileForm"
  />
  <ProjectFileForm
      :project-id="group.uuid"
      v-if="showNewFileForm"
      v-on:created-file="onFileCreated($event)"
  />
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import VersionTitle from "@/components/repository/atoms/VersionTitle.vue";
import VersionBody from "@/components/repository/molecules/VersionBody.vue";
import {Group} from "@/object/Group";
import IDEVue from "@/components/ide/IDEVue.vue";
import ProjectFileForm from "@/components/project/atoms/ProjectFileForm.vue";

@Options({
  name: "RepositoryVersionVue",
  components: {
    ProjectFileForm,
    IDEVue,
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
  private selectedFile = "";
  private showNewFileForm = false;
  private reload = false;

  private onFileCreated(file: string): void {
    this.reload = !this.reload;
    this.showNewFileForm = false;
    this.selectedFile = file;
  }

}
</script>
<style>
.version-card {
  background-color: #F0F0F0;
  border-radius: 8px;
}
</style>
