<template>
  <div class="user-login-fields">
    <LoginInputView @input-value="(value) => this.mail = value" :input-place-holder="mailPlaceHolder" />
    <LoginInputView @input-value="(value) => this.password = value" :input-place-holder="passwordPlaceHolder" />
    <LoginButtonView :label="connectButtonLabel" :action="connect" />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import LoginInputView from "@/components/user/login/atoms/LoginInputView.vue";
import LoginButtonView from "@/components/user/login/atoms/LoginButtonView.vue";

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
  private passwordPlaceHolder = "Password";

  private mail = "";
  private password = "";

  private async connect() {
    await fetch(`${process.env.VUE_APP_AUTH_API_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        email: this.mail,
        password: this.password
      }),
      headers: { "Content-type": "application/json" }
    })
    .then(response => {
      if (response.status !== 201) {
        throw new Error("Connexion failed");
      }
      return response.json();
    })
    .then(json => {
      sessionStorage.setItem('access_token', json.access_token);
      window.location.pathname = '/';
    })
    .catch(err => {
      console.error(err);
      alert("Connexion failed");
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
