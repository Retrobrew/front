<template>
  <button class="btn btn-primary user-login-fields-button" @click="props.action">
    {{props.label}}
  </button>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
import {defineProps} from "vue";

export default class LoginButtonView extends Vue {

  private props = defineProps({
    label: String,
    action: Function
  });
}
</script>

<style scoped>
.user-login-fields-button {
  align-self: center;
  margin: 24px;
  width: 40%;
}
</style>
