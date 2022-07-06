<template>
  <div class="user-register-fields">
    <RegisterInputView @input-value="(value) => this.username = value" :input-place-holder="this.usernamePlaceHolder"/>
    <RegisterInputView @input-value="(value) => this.password = value" :input-place-holder="this.passwordPlaceHolder" :input-type="passwordInputType"/>
    <RegisterInputView @input-value="(value) => this.mail = value" :input-place-holder="this.mailPlaceHolder" :input-type="mailInputType"/>
    <RegisterInputView @input-value="(value) => this.birthdate = value" :input-place-holder="this.birthdatePlaceHolder" type="date"/>
    <RegisterSelectorView @input-value="(value) => this.country = value" :list="this.countries"/>
    <RegisterSelectorView @input-value="(value) => this.sexe = value" :list="this.sexes"/>
    <RegisterInputView @input-value="(value) => this.picture = value" :input-place-holder="this.picturePlaceHolder"/>
    <RegisterButtonView :label="this.registerButtonLabel" :action="register"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import RegisterInputView from "@/components/user/register/atoms/RegisterInputView.vue";
import RegisterSelectorView from "@/components/user/register/atoms/RegisterSelectorView.vue";
import RegisterButtonView from "@/components/user/register/atoms/RegisterButtonView.vue";
import APIController from "@/controller/APIController";

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
  private mailInputType = "email"
  private password = ""
  private passwordPlaceHolder = "Password"
  private passwordInputType = "password"
  private birthdate = "";
  private birthdatePlaceHolder = "Birthdate"
  private country = this.countries[0]
  private sexe = this.sexes[0]
  private picture = ""
  private picturePlaceHolder = "URL to profile picture"

  private async register() {
    await APIController.register(this.mail, this.username, this.birthdate, this.sexe, this.country, this.password, this.picture);
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
