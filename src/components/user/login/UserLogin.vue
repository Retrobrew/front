<template>
  <div class="user-login">
    <h1>Login</h1>
    <LoginFields />
    <LoginRegisterRedirection />
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class UserLogin extends Vue {
}
</script>

<style scoped>
.user-login {
  text-align: center;
}
</style>
