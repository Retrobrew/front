<template>
  <button class="btn btn-primary user-register-fields-button" @click="props.action">
    {{props.label}}
  </button>
</template>

<script lang="ts">
import {Vue} from "vue-class-component/dist/vue-class-component";
import {defineProps} from "vue";

export default class RegisterButtonView extends Vue {
  private props = defineProps({
    label: String,
    action: Function,
  });
}
</script>

<style scoped>
.user-register-fields-button {
  align-self: center;
  margin: 24px;
  width: 40%;
}
</style>
