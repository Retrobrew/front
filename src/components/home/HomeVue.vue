<template>
  <h1>Welcome to Retrobrew !</h1>
</template>

<script>
export default {
  name: "HomeVue",
  data() {
    return {
      isLoginValid: Boolean
    }
  },
  beforeMount() {
    console.log(process.env)
    const token = sessionStorage.getItem('access_token');
    if (token === undefined) {
      this.isLoginValid = false;
    } else {
      fetch(`${process.env.VUE_APP_AUTH_API_URL}/profile`, {
        headers: { Authorization: "Bearer " + token }
      })
      .then(response => console.log(response));
    }
  }
}
</script>

<style scoped>

</style>
