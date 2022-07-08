<template>
  <div class="container version-card p-2">
    <VersionBody
      :key="reload"
      :version-language="repositoryLanguage"
      :version-number="version"
      :project-id="group.uuid"
      v-on:browse-version="onBrowseVersion($event); selectedFile=''"
      v-on:select-file="selectedFile = $event; showNewFileForm = false"
      v-on:new-file="showNewFileForm = true;  showCreateVersionForm = false"
      v-on:new-version="showNewFileForm = false; showCreateVersionForm = true"
    />
  </div>
  <IDEVue
      :version="version"
      :readonly="version !== 'latest'"
      :project-id="group.uuid"
      :current-file="selectedFile"
      :key="selectedFile"
      v-if="selectedFile && !showNewFileForm && !showCreateVersionForm"
      v-on:delete-file="selectedFile = ''; reload = !reload"
  />
  <ProjectFileForm
      :project-id="group.uuid"
      v-if="showNewFileForm"
      v-on:created-file="onFileCreated($event)"
  />
  <ProjectVersionForm
      :project-id="group.uuid"
      v-if="showCreateVersionForm"
      v-on:created-version="onNewVersion($event)"
  />
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import VersionTitle from "@/components/repository/atoms/VersionTitle.vue";
import VersionBody from "@/components/repository/molecules/VersionBody.vue";
import {Group} from "@/object/Group";
import IDEVue from "@/components/ide/IDEVue.vue";
import ProjectFileForm from "@/components/project/atoms/ProjectFileForm.vue";
import ProjectVersionForm from "@/components/project/atoms/ProjectVersionForm.vue";

@Options({
  name: "RepositoryVersionVue",
  components: {
    ProjectVersionForm,
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
  private repositoryLanguage = "Rust";
  private selectedFile = "";
  private showNewFileForm = false;
  private showCreateVersionForm = false;
  private reload = false;
  private version = "latest";

  private onFileCreated(file: string): void {
    this.reload = !this.reload;
    this.showNewFileForm = false;
    this.selectedFile = file;
  }

  private onNewVersion(versionNumber: string): void {
    this.reload = !this.reload;
    this.showCreateVersionForm = false;
  }

  private onBrowseVersion(versionNumber: string): void {
    this.version = versionNumber;
    this.reload = !this.reload;
  }

}
</script>
<style>
.version-card {
  background-color: #F0F0F0;
  border-radius: 8px;
}
</style>
