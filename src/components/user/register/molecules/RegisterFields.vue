<template>
  <div class="user-register-fields">
    <RegisterInputView @input-value="(value) => this.username = value" :input-place-holder="this.usernamePlaceHolder" />
    <RegisterInputView @input-value="(value) => this.password = value" :input-place-holder="this.passwordPlaceHolder"/>
    <RegisterInputView @input-value="(value) => this.mail = value" :input-place-holder="this.mailPlaceHolder"/>
    <RegisterInputView @input-value="(value) => this.birthdate = value" :input-place-holder="this.birthdatePlaceHolder" type="date"/>
    <RegisterSelectorView :list="this.countries"/>
    <RegisterSelectorView :list="this.sexes"/>
    <RegisterInputView @input-value="(value) => this.picture = value" :input-place-holder="this.picturePlaceHolder"/>
    <RegisterButtonView :label="this.registerButtonLabel" :action="register"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import RegisterInputView from "@/components/user/register/atoms/RegisterInputView.vue";
import RegisterSelectorView from "@/components/user/register/atoms/RegisterSelectorView.vue";
import RegisterButtonView from "@/components/user/register/atoms/RegisterButtonView.vue";

@Options({
  name: "RegisterFields",
  components: {
    RegisterInputView,
    RegisterSelectorView,
    RegisterButtonView
  }
})
export default class RegisterFields extends Vue {
  private countries = [
    "Belgium",
    "Denmark",
    "Finland",
    "France",
    "Germany",
    "Poland",
    "Netherlands",
    "Norway",
    "Sweden",
    "United Kingdom"
  ];

  private sexes = [
    "Male",
    "Female"
  ];

  private registerButtonLabel = "Register"
  private username = ""
  private usernamePlaceHolder = "Username"
  private mail = ""
  private mailPlaceHolder = "Email address"
  private password = ""
  private passwordPlaceHolder = "Password"
  private birthdate = ""
  private birthdatePlaceHolder = "Birthdate"
  private country = ""
  private sexe = ""
  private picture = ""
  private picturePlaceHolder = "URL to profile picture"

  private async register() {
      await fetch(`${process.env.VUE_APP_AUTH_API_URL}/users`, {
        method: "POST",
        body: JSON.stringify({
          email: this.mail,
          username: this.username,
          password: this.password
        }),
        headers: { "Content-type": "application/json" }
      })
      .then(response => {
        if (response.status !== 201) {
          throw new Error("Registration failed")
        }
        return response.json()
      })
      .then(json => {
        console.log(json);
        this.connect();
      })
      .catch(err => {
        alert(err);
      });
    }
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
.user-register-fields {
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 960px;
  min-width: 320px;
  width: 50vw;
}
</style>
