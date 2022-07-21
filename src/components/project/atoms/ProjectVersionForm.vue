<template>
  <form
      v-on:submit="createNewVersion"
  >
    <MDBInput
        name="version"
        class="form-control-sm"
        type="text"
        placeholder="version number"
        v-model="versionName"
    />
    <MDBCheckbox
      label="Release as a lib ?"
      class="lib-checkbox"
      v-model="isLib"
    />
    <MDBTextarea
      :disabled="!isLib.valueOf()"
      type="text"
      class="lib-textarea"
      rows="2"
      label="Library description"
      placeholder="A description is required for your library, describe what the lib does and why people should use it."
      v-model="description"
    />
    <MDBBtn
      type="submit"
      class="button-version-create"
    >
      CREATE
    </MDBBtn>
  </form>

</template>

<script setup lang="ts">
import {defineEmits, defineProps, ref} from "vue";
import { MDBInput, MDBBtn, MDBCheckbox, MDBTextarea } from "mdb-vue-ui-kit";
import ProjectController from "@/controller/ProjectController";

const props = defineProps({
  projectId: {
    type: String,
    required: true
  },
  projectName: {
    type: String,
    required: true
  },
})

const emit = defineEmits<{
  (e: 'created-version', version: string, isLibrary: boolean, description: string): void
}>()

const versionName = ref<string>('')
const isLib = ref<boolean>(false)
const description = ref<string>('')

// eslint-disable-next-line no-undef
const createNewVersion = (event: SubmitEvent) => {
  event.preventDefault()
  if(versionName.value.trim() === ""){
    alert('version name should not be empty')
  }

  const regex = new RegExp(/[&/\\#,+()$~%'":*?<>{}°=]/, 'g');

  // C'est dégueu mais j'arrive pas a escape les brackets dans la regex de ces morts !!!!
  const cleanedVersionName = versionName.value.replace(regex, '')
      .replaceAll('[', '')
      .replaceAll(']', '')
  ;

  if(!event.target) {
    return;
  }

  ProjectController.createArchive(props.projectId, props.projectName, cleanedVersionName, isLib.value, description.value)
    .then(_ => {
      emit('created-version', cleanedVersionName, isLib.value, description.value )
    })
    .catch(_ => {
      alert("Error while trying to create version " + cleanedVersionName)
    })

}
</script>

<style scoped>
.lib-checkbox {
  margin: 8px;
}
.lib-textarea {
  margin: 16px;
}
.button-version-create {
  margin: 8px;
}
</style>
