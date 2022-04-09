<template>
  <div class="user-register">
    <h1>Register</h1>
    <RegisterFields />
    <RegisterLoginRedirection />
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class UserRegister extends Vue {
}
</script>

<style scoped>
.user-register {
  text-align: center;
}
</style>
