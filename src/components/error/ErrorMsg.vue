<template>
  <div
      class="alert alert-danger alert-dismissible fade show mt-3"
  >
    {{errorMsg}}
    <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        v-on:click="$emit('close')"
    ></button>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps({
  errorMsg: {
    type: String,
    required: true
  }
})
</script>

<style scoped>

</style>