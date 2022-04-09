<script setup lang="ts">

import {defineProps} from "vue";

const props = defineProps(['label', 'action']);
</script>

<template>
  <button class="btn btn-primary user-register-fields-button" @click="props.action">
    {{props.label}}
  </button>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class RegisterButtonView extends Vue {
}
</script>

<style scoped>
.user-register-fields-button {
  align-self: center;
  margin: 24px;
  width: 40%;
}
</style>
