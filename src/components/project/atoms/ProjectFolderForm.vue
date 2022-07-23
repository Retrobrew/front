<template>
  <form
      v-on:submit="createNewFolder"
  >
    <MDBInput
        name="foldername"
        class="form-control-sm"
        type="text"
        placeholder="full path and foldername (exemple: src/folderName)"
        v-model="foldername"
    />
    <input type="hidden" :value="projectId" name="project"/>
    <MDBBtn
      type="submit"
    >
      CREATE
    </MDBBtn>
  </form>
</template>

<script setup lang="ts">
import  {MDBInput, MDBBtn} from "mdb-vue-ui-kit";
import {defineEmits, defineProps, ref} from "vue";
import ProjectController from "@/controller/ProjectController";

const props = defineProps({
  projectId: {
    type: String,
    required: true
  }
});

const emit = defineEmits<{
  (e: 'created-folder', folder: string): void
}>();

const foldername = ref<string>('');

// eslint-disable-next-line no-undef
const createNewFolder = (event: SubmitEvent) => {
  event.preventDefault()
  if(foldername.value.trim() === ""){
    alert("folder name is empty")
    return
  }

  const regex = new RegExp(/[&\\#,+()$~%.'":*?<>{}°=]/, 'g');

  const cleanedFoldername = foldername.value.replace(regex, '')
      .replaceAll('[', '')
      .replaceAll(']', '')
  ;

  if (!event.target) {
    return;
  }

  const formData = new FormData(event.target as HTMLFormElement);
  formData.set('dirname', cleanedFoldername);

  ProjectController.createFolder(formData)
      .then(() => {
        emit('created-folder', cleanedFoldername)
      })
      .catch(() => {
        alert("folder already exists")
      });
}
</script>

<style scoped>

</style>
