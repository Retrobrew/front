<template>
  <input class="user-login-fields-input" @change='$emit("inputValue", $emit.target.value)' :placeholder="inputPlaceHolder">
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
  margin: 12px;
  width: 90%;
}
</style>
