<script setup lang="ts">
import {defineEmits, defineProps} from "vue";

const props = defineProps(['inputPlaceHolder', 'inputType']);
const emits = defineEmits(['inputValue']);
</script>

<template>
  <input class="form-control user-login-fields-input" @change='emits("inputValue", $event.target.value)' :placeholder="props.inputPlaceHolder" :type="props.inputType">
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class LoginInputView extends Vue {
}
</script>

<style scoped>
.user-login-fields-input {
  margin: 12px auto;
  width: 90%;
}
</style>
