<template>
  <div class="container version-card p-2">
    <VersionBody
      :key="reload"
      :version-language="group.language"
      :version-number="version"
      :project-id="group.uuid"
      v-on:browse-version="onBrowseVersion($event)"
      v-on:select-file="selectedFile = $event; showNewFileForm = false; showFolderForm = false"
      v-on:new-file="showNewFileForm = true;  showFolderForm = false; showCreateVersionForm = false"
      v-on:new-folder="showNewFileForm = false; showFolderForm = true; showCreateVersionForm = false"
      v-on:new-version="showNewFileForm = false; showFolderForm = false; showCreateVersionForm = true"
    />
  </div>
  <IDEVue
      :version="version"
      :readonly="version !== 'latest'"
      :project-id="group.uuid"
      :current-file="selectedFile"
      :group-language="group.language"
      :version-number="version"
      :key="selectedFile"
      v-if="selectedFile && !showNewFileForm && !showFolderForm && !showCreateVersionForm"
      v-on:delete-file="selectedFile = ''; reload = !reload"
  />
  <ProjectFileForm
      :project-id="group.uuid"
      :group-language="group.language"
      v-if="showNewFileForm"
      v-on:created-file="onFileCreated($event)"
  />
  <ProjectFolderForm
      :project-id="group.uuid"
      v-if="showFolderForm"
      v-on:created-file="onFolderCreated($event)"
  />
  <ProjectVersionForm
      :project-id="group.uuid"
      :project-name="group.name"
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
import ProjectFolderForm from "@/components/project/atoms/ProjectFolderForm.vue";

@Options({
  name: "RepositoryVersionVue",
  components: {
    ProjectFolderForm,
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
  private selectedFile = "";
  private showNewFileForm = false;
  private showFolderForm = false;
  private showCreateVersionForm = false;
  private reload = false;
  private version = "latest";

  private onFileCreated(file: string): void {
    this.reload = !this.reload;
    this.showNewFileForm = false;
    this.selectedFile = file;
  }

  private onFolderCreated(folder: string): void {
    this.reload = !this.reload;
    this.showFolderForm = false;
  }

  private onNewVersion(versionNumber: string): void {
    this.reload = !this.reload;
    this.showCreateVersionForm = false;
  }

  private onBrowseVersion(versionNumber: string): void {
    this.reload = !this.reload;
    this.selectedFile = '';
    this.version = versionNumber;
  }
}
</script>
<style>
.version-card {
  background-color: #F0F0F0;
  border-radius: 8px;
}
</style>
