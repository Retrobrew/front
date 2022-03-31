<template>
  <button class="btn btn-primary user-login-fields-button" @click="connect()">
    {{label}}
  </button>
</template>

<script>
export default {
  name: "LoginButtonView",
  props: {
    label: String,
  },
  methods: {
    connect() {
      alert('API call not implemented yet')
    }
  }
}
</script>

<style scoped>
.user-login-fields-button {
  align-self: center;
  margin: 24px;
  width: 40%;
}
</style>
