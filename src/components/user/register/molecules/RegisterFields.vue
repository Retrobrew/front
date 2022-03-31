<template>
  <div class="user-register-fields">
    <RegisterInputView @input-value="(value) => this.username = value" :input-place-holder="usernamePlaceHolder" />
    <RegisterInputView @input-value="(value) => this.password = value" :input-place-holder="passwordPlaceHolder"/>
    <RegisterInputView @input-value="(value) => this.mail = value" :input-place-holder="mailPlaceHolder"/>
    <RegisterInputView @input-value="(value) => this.birthdate = value" :input-place-holder="birthdatePlaceHolder" type="date"/>
    <RegisterCountrySelectorView :list="countries"/>
    <RegisterCountrySelectorView :list="sexes"/>
    <RegisterInputView @input-value="(value) => this.picture = value" :input-place-holder="picturePlaceHolder"/>
    <RegisterButtonView :label="this.registerButtonLabel" />
  </div>
</template>

<script>
import RegisterInputView from "@/components/user/register/atoms/RegisterInputView";
import RegisterButtonView from "@/components/user/register/atoms/RegisterButtonView";
import RegisterCountrySelectorView from "@/components/user/register/atoms/RegisterSelectorView";

const countries = [
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
]

const sexes = [
    "Male",
    "Female"
]

export default {
  name: "RegisterFields",
  components: {RegisterCountrySelectorView, RegisterButtonView, RegisterInputView},
  data() {
    return {
      registerButtonLabel: "Register",
      username: "",
      usernamePlaceHolder: "Username",
      mail: "",
      mailPlaceHolder: "Email address",
      password: "",
      passwordPlaceHolder: "Password",
      birthdate: "",
      birthdatePlaceHolder: "Birthdate",
      countries,
      sexes,
      picture: "",
      picturePlaceHolder: "URL to profile picture"
    }
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
