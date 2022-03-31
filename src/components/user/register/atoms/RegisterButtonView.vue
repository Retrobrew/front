<template>
  <button class="btn btn-primary user-register-fields-button" @click="action">
    {{label}}
  </button>
</template>

<script>
export default {
  name: "RegisterButtonView",
  props: {
    label: String,
    action: Function,
  }
}
</script>

<style scoped>
.user-register-fields-button {
  align-self: center;
  margin: 24px;
  width: 40%;
}
</style>
