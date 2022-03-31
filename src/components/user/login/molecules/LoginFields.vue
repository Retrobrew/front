<template>
  <div class="user-login-fields">
    <LoginInputView @input-value="(value) => this.username = value" :input-place-holder="usernamePlaceHolder" />
    <LoginInputView @input-value="(value) => this.password = value" :input-place-holder="passwordPlaceHolder" />
    <LoginButtonView :label="connectButtonLabel" :action="connect" />
  </div>
</template>

<script>
import LoginInputView from "@/components/user/login/atoms/LoginInputView";
import LoginButtonView from "@/components/user/login/atoms/LoginButtonView";
export default {
  name: "LoginFields",
  components: {LoginButtonView, LoginInputView},
  methods: {
    connect() {
      alert(`Sorry ${this.username} API call not implemented yet`)
    }
  },
  data() {
    return {
      connectButtonLabel: "Connect",
      username: "",
      usernamePlaceHolder: "Username",
      password: "",
      passwordPlaceHolder: "Password",
    }
  }
}
</script>

<style scoped>
.user-login-fields {
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 960px;
  min-width: 320px;
  width: 50vw;
}
</style>
