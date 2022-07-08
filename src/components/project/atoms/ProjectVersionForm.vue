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
    <MDBBtn
      type="submit"
    >
      CREATE
    </MDBBtn>
  </form>

</template>

<script setup lang="ts">
import {defineEmits, defineProps, ref} from "vue";
import { MDBInput, MDBBtn } from "mdb-vue-ui-kit";
import ProjectController from "@/controller/ProjectController";

const props = defineProps({
  projectId: {
    type: String,
    required: true
  }
})

const emit = defineEmits<{
  (e: 'created-version', version: string): void
}>()

const versionName = ref<string>('')

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
      emit('created-version', cleanedVersionName )
    })
    .catch(error => {
      alert("Error while trying to create version " + cleanedVersionName)
    })

}
</script>

<style scoped>

</style>