<template>
  <input class="form-control user-register-fields-input" @change='$emit("inputValue", $event.target.value)' :placeholder="inputPlaceHolder">
</template>

<script>
export default {
  name: "RegisterInputView",
  props: {
    inputPlaceHolder: String,
  },
  emits: ['inputValue']
}
</script>

<style scoped>
.user-register-fields-input {
  margin: 12px auto;
  width: 90%;
}
</style>
