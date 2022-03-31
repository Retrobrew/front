<template>
  <input class="form-control user-login-fields-input" @change='$emit("inputValue", $event.target.value)' :placeholder="inputPlaceHolder">
</template>

<script>
export default {
  name: "LoginInputView",
  props: {
    inputPlaceHolder: String,
  },
  emits: ['inputValue']
}
</script>

<style scoped>
.user-login-fields-input {
  margin: 12px auto;
  width: 90%;
}
</style>
