<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps(['label', 'action']);
</script>

<template>
  <button class="btn btn-primary user-login-fields-button" @click="props.action">
    {{props.label}}
  </button>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class LoginButtonView extends Vue {
}
</script>

<style scoped>
.user-login-fields-button {
  align-self: center;
  margin: 24px;
  width: 40%;
}
</style>
