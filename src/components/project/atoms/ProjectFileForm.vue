<template>
  <form
      v-on:submit="createNewFile"
  >
    <MDBInput
        name="filename"
        class="form-control-sm"
        type="text"
        placeholder="filename without extension"
        v-model="filename"
    />
    <select
        name="extension"
        v-model="fileExtension"
    >
      <option
          v-for="(extension, index) in allowedExtensions"
          :key="index"
          v-bind:value="extension"
      >
        {{extension}}
      </option>
    </select>
    <input type="hidden" :value="projectId" name="project"/>
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
  (e: 'created-file', file: string): void
}>()

const filename = ref<string>('')
const allowedExtensions = [
    ".rs",
    ".toml"
];
const fileExtension = ref<string>('.rs')

// eslint-disable-next-line no-undef
const createNewFile = (event: SubmitEvent) => {
  event.preventDefault()
  if(filename.value.trim() === ""){
    alert("file name should not be empty")
    return;
  }

  const regex = new RegExp(/[&\\#,+()$~%.'":*?<>{}°=]/, 'g');

  // C'est dégueu mais j'arrive pas a escape les brackets dans la regex de ces morts !!!!
  const cleanedFilename = filename.value.replace(regex, '')
      .replaceAll('[', '')
      .replaceAll(']', '')
  ;

  if(!event.target) {
    return;
  }

  const formData = new FormData((event.target as HTMLFormElement));
  formData.set('filename', cleanedFilename)

  ProjectController.createFile(formData)
    .then(_ => {
      emit('created-file', cleanedFilename + fileExtension.value)
    })
    .catch(_ => {
      console.error("Error while trying to create file " + cleanedFilename)
    })

}
</script>

<style scoped>

</style>
