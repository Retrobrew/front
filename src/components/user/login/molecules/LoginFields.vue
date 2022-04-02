<template>
  <div class="user-login-fields">
    <LoginInputView @input-value="(value) => this.mail = value" :input-place-holder="mailPlaceHolder" />
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
    async connect() {
      await fetch(`http://localhost:3000/auth/login`, {
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
  },
  data() {
    return {
      connectButtonLabel: "Connect",
      mail: "",
      mailPlaceHolder: "Email",
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
