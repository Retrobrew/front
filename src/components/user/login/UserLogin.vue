<template>
  <div class="user-login">
    <h1>Login</h1>
    <LoginFields />
    <LoginResgisterRedirection />
  </div>
</template>

<script>
import LoginFields from "@/components/user/login/molecules/LoginFields";
import LoginResgisterRedirection from "@/components/user/login/atoms/LoginResgisterRedirection";
export default {
  name: "UserLogin",
  components: {LoginResgisterRedirection, LoginFields}
}
</script>

<style scoped>
.user-login {
  text-align: center;
}
</style>
