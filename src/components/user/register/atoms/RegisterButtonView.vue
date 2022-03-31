<template>
  <button class="btn btn-primary user-register-fields-button" @click="register()">
    {{label}}
  </button>
</template>

<script>
export default {
  name: "RegisterButtonView",
  props: {
    label: String,
  },
  methods: {
    register() {
      alert('API call not implemented yet')
    }
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
