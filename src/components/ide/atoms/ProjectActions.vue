<template>
  <div class="d-flex justify-content-center m-2">
    <button
        v-on:click="compileCode"
        class="btn btn-dark m-1">
      Compile code
    </button>
    <button
        v-bind:disabled="!wasCompiled"
        v-on:click="testProject"
        class="btn btn-primary m-1">
      Test project
    </button>
    <button
        v-on:click="saveFile(currentFile)"
        class="btn btn-success m-1">
      Save file
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import ProjectController from "@/controller/ProjectController";


const emit = defineEmits<{
  (e: 'compilationError', msg: string): void
  (e: 'projectLoading', isLoading: boolean): void
  (e: 'projectCompilation', isCompiling: boolean): void
  (e: 'compilationSuccess', compileResult: Object): void
}>()

const props = defineProps({
  wasCompiled: {
    type: Boolean,
    required: true
  },
  currentFile: {
    type: String,
    required: true
  }
})

const compilationError = "Error while trying to execute project";

const testProject = () => {
  emit(
      'projectLoading',
      true
  )

  ProjectController
      .testProject(555)
      .then(testUrl => {
        window.open(testUrl, '_blank');
      }).catch(error => {
    emit('compilationError', compilationError)
    console.error(error.message)
  }).finally(() => {
    emit('projectLoading', false)
  })
}

const saveFile = (filename: string) => {
  console.log("Enregistrement du fichier: API à faire")
  alert(`the file ${filename} was saved.`);
}

const compileCode = () => {
  emit('projectCompilation', true)

  ProjectController
    // .compileProject(projectId.value, currentLanguage)
    .compileProject(555, 'roms.rs')
    .then(res => {
      res = cleanLogs(res);
      emit('compilationSuccess', {
        wasCompiled: true,
        logs: res
      })

    }).catch(error => {
      emit('compilationSuccess', {
        wasCompiled: false,
        logs: ""
      })
      // errorMsg.value = "Error while trying to compile project. Please try again.";
      console.error(error.message);

  }).finally(() => {
    emit('projectCompilation', false)
  })
}

const cleanLogs = (logs: String) => {
  return logs.replaceAll('<br>', "\n ");
}
</script>

<style scoped>

</style>