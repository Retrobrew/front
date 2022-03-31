<template>
  <div class="user-register">
    <h1>Register</h1>
    <RegisterFields />
    <RegisterLoginRedirection />
  </div>
</template>

<script>
import RegisterFields from "@/components/user/register/molecules/RegisterFields";
import RegisterLoginRedirection from "@/components/user/register/atoms/RegisterLoginRedirection";
export default {
  name: "UserRegister",
  components: {RegisterLoginRedirection, RegisterFields}
}
</script>

<style scoped>
.user-register {
  text-align: center;
}
</style>
