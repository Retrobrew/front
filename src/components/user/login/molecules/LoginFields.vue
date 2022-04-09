<template>
  <div class="user-login-fields">
    <LoginInputView @input-value="(value) => this.mail = value" :input-place-holder="mailPlaceHolder" />
    <LoginInputView @input-value="(value) => this.password = value" :input-place-holder="passwordPlaceHolder" />
    <LoginButtonView :label="connectButtonLabel" :action="connect" />
  </div>
</template>

<script lang="ts">
import {Vue} from "vue-class-component";

export default class LoginFields extends Vue {
  private connectButtonLabel = "Connect";
  private mailPlaceHolder = "Email";
  private passwordPlaceHolder = "Password";

  private mail = "";
  private password = "";


  private async connect(){
    await fetch(`${process.env.VUE_APP_AUTH_API_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        email: this.mail,
        password: this.password
      }),
      headers: { "Content-type": "application/json" }
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      if (json.statusCode === 401) {
        alert("Connexion failed");
      } else {
        sessionStorage.setItem('access_token', json.access_token);
        window.location.pathname = '/';
      }
    });
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
