<template>
  <div class="user-register-fields">
    <RegisterInputView
        @input-value="(value) => this.user.username = value"
        :input-place-holder="this.usernamePlaceHolder"/>
    <RegisterInputView
        @input-value="(value) => this.password = value"
        :input-place-holder="this.passwordPlaceHolder"
        :input-type="passwordInputType"/>
    <RegisterInputView
        @input-value="(value) => this.user.mail = value"
        :input-place-holder="this.mailPlaceHolder"
        :input-type="mailInputType"/>
    <RegisterInputView
        @input-value="(value) => this.user.birthday = value"
        :input-place-holder="this.birthdatePlaceHolder"
        type="date"/>
    <RegisterSelectorView
        @input-value="(value) => this.user.country = value"
        :list="this.countries"/>
    <RegisterSelectorView
        @input-value="(value) => this.user.gender = value"
        :list="this.genders"/>
    <RegisterInputView
        @input-value="(value) => this.picture = value"
        :input-place-holder="this.picturePlaceHolder"/>
    <RegisterButtonView :label="this.registerButtonLabel" :action="register"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import RegisterInputView from "@/components/user/register/atoms/RegisterInputView.vue";
import RegisterSelectorView from "@/components/user/register/atoms/RegisterSelectorView.vue";
import RegisterButtonView from "@/components/user/register/atoms/RegisterButtonView.vue";
import APIController from "@/controller/APIController";
import {User} from "@/object/User";

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

  private genders = [
    "Male",
    "Female",
    "Non-binary"
  ];
  private user: User = User.newUser();

  private registerButtonLabel = "Register";
  private usernamePlaceHolder = "Username";
  private mailPlaceHolder = "Email address";
  private mailInputType = "email";
  private password = "";
  private passwordPlaceHolder = "Password";
  private passwordInputType = "password";
  private birthdatePlaceHolder = "Birthdate";
  private picture: File |null = null;
  private picturePlaceHolder = "URL to profile picture";

  private async register() {
    if(!this.picture){
      return;
    }
    await APIController.register(
        this.user,
        this.password,
        this.picture
    ).then(() => {
      this.$router.push('/')
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
