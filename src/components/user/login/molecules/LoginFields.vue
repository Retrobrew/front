<template>
  <div class="user-login-fields">
    <LoginInputView @input-value="(value) => this.mail = value" :input-place-holder="mailPlaceHolder" :input-type="mailType"/>
    <LoginInputView @input-value="(value) => this.password = value" :input-place-holder="passwordPlaceHolder" :input-type="passwordType"/>
    <LoginButtonView :label="connectButtonLabel" :action="connect" />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import LoginInputView from "@/components/user/login/atoms/LoginInputView.vue";
import LoginButtonView from "@/components/user/login/atoms/LoginButtonView.vue";
import APIController from "@/controller/APIController";

@Options({
  name: "LoginFields",
  components: {
    LoginInputView,
    LoginButtonView
  }
})
export default class LoginFields extends Vue {
  private connectButtonLabel = "Connect";
  private mailPlaceHolder = "Email";
  private mailType = "email";
  private passwordPlaceHolder = "Password";
  private passwordType = "password";

  private mail = "";
  private password = "";

  private async connect() {
    // await APIController.login(this.mail, this.password);
    await APIController.login("adouillard@myges.fr", "P3$$w0rd")

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
