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
import { MDBInput, MDBBtn, MDBCheckbox } from "mdb-vue-ui-kit";
import ProjectController from "@/controller/ProjectController";

const props = defineProps({
  projectId: {
    type: String,
    required: true
  }
})

const emit = defineEmits<{
  (e: 'created-version', version: string, isLibrary: boolean): void
}>()

const versionName = ref<string>('')
const isLib = ref<boolean>(false)

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

  ProjectController.createArchive(props.projectId, cleanedVersionName)
    .then(res => {
      emit('created-version', cleanedVersionName, isLib.value )
    })
    .catch(error => {
      alert("Error while trying to create version " + cleanedVersionName)
    })

}
</script>

<style scoped>
.lib-checkbox {
  margin: 8px;
}
.button-version-create {
  margin: 8px;
}
</style>
