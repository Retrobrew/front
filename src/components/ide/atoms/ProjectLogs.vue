<template>
  <div class="d-flex justify-content-center container">
    <div v-if="!isLoadingProject && !errorMsg" class="ide container p-2 mt-2">
      <h4 class="align-self-center card-title">Logs</h4>
      <div class="text-center m-3">
        <MDBSpinner v-if="isCompiling"/>
      </div>
      <div v-if="logs" class="bg-light p-5 logs">
        {{logs}}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import { MDBSpinner } from 'mdb-vue-ui-kit'

const props = defineProps( {
  isLoadingProject: {
    type: Boolean,
    required: true
  },
  errorMsg: {
    type: String,
    required: true
  },
  isCompiling: {
    type: Boolean,
    required: true
  },
  logs: {
    type: String,
    required: true
  }
})

</script>

<style scoped>
.logs {
  white-space: pre-wrap;
}

</style>