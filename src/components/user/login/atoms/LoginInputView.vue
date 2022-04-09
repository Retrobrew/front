<template>
  <input class="form-control user-login-fields-input" @change='emits("inputValue", $event.target.value)' :placeholder="props.inputPlaceHolder">
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
import {defineEmits, defineProps} from "vue";

export default class LoginInputView extends Vue {

  private props = defineProps({
    inputPlaceHolder: String,
  });

  private emits = defineEmits(['inputValue']);
}
</script>

<style scoped>
.user-login-fields-input {
  margin: 12px auto;
  width: 90%;
}
</style>
