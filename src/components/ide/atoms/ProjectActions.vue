<template>
  <div class="d-flex justify-content-center m-2">
    <button
        v-on:click="compileCode"
        class="btn btn-primary m-1">
      Compile code
    </button>
    <button
        v-bind:disabled="!wasCompiled"
        v-on:click="testProject"
        class="btn btn-primary m-1">
      Test project
    </button>
    <div v-if="!readonly">
      <button
          v-on:click="emit('save-file')"
          class="btn btn-success m-1">
        Save file
      </button>
      <button
          v-on:click="onDeleteFile"
          class="btn btn-danger m-1">
        Delete file
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import ProjectController from "@/controller/ProjectController";


const emit = defineEmits<{
  (e: 'save-file'): void
  (e: 'delete-file'): void
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
  },
  projectId: {
    type: String,
    required: true
  },
  readonly: {
    type: Boolean,
    required: true
  },
  groupLanguage: {
    type: String,
    required: true
  },
  versionNumber: {
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
      .testProject(props.projectId)
      .then(testUrl => {
        window.open(testUrl, '_blank');
      }).catch(error => {
    emit('compilationError', compilationError)
    console.error(error.message)
  }).finally(() => {
    emit('projectLoading', false)
  })
}

const compileCode = () => {
  emit('projectCompilation', true)

  ProjectController
    .compileProject(props.projectId, props.groupLanguage, props.versionNumber)
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

const onDeleteFile = () => {
  if(confirm("You are about to delete the file " + props.currentFile)) {
    ProjectController.deleteFile(props.projectId, props.currentFile)
        .then((res) => {
          if(res) {
            emit('delete-file')
          }
        })
        .catch(error => console.error(error.message))
  }
}
</script>

<style scoped>

</style>
