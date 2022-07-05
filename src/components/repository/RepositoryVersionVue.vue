<template>
  <div class="container version-card p-2">
    <VersionTitle :title="repositoryTitle"/>
    <VersionBody
        :version-number="repositoryVersion"
        :version-language="repositoryLanguage"
        :project-id="group.uuid"
        v-on:select-file="selectedFile = $event"
    />
  </div>
  <IDEVue
      :key="selectedFile"
      v-if="selectedFile && !showNewFileForm"
      :current-file="selectedFile"
      v-on:new-file="showNewFileForm = true"
  />
  <ProjectFileForm
      v-if="showNewFileForm"
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

  private createNewFile() {
    console.log("Not implemented yet");
    //Show component new File
    //Hide IDE
  }

}
</script>
<style>
.version-card {
  background-color: #F0F0F0;
  border-radius: 8px;
}
</style>
