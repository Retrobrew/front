<template>
  <div class="user-login">
    <h1>Login</h1>
    <LoginFields />
    <LoginRegisterRedirection />
  </div>
</template>

<script>
import LoginFields from "@/components/user/login/molecules/LoginFields";
import LoginRegisterRedirection from "@/components/user/login/atoms/LoginRegisterRedirection";
export default {
  name: "UserLogin",
  components: {LoginRegisterRedirection, LoginFields}
}
</script>

<style scoped>
.user-login {
  text-align: center;
}
</style>
