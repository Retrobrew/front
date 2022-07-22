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
    <img class="card-img w-75 mt-2" v-bind:src="picture" v-if="showPicture"/>
    <div  class="col-sm-auto">
      <a
          v-on:click="uploadFile"
          class="link small col-sm-3"
      >
        Upload a picture
      </a>
      <input
          v-on:change="displayPicture($event)"
          ref="uploadField" style="display: none"
          type="file" class="hidden"
      />
    </div>
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
import countryList from "@/utils/countries.json";
import gendersList from "@/utils/genders.json";

@Options({
  name: "RegisterFields",
  components: {
    RegisterInputView,
    RegisterSelectorView,
    RegisterButtonView
  }
})
export default class RegisterFields extends Vue {
  private countries = countryList;
  private genders = gendersList;
  private showPicture = false;
  private picture: string = "";
  private pictureBlob: File | undefined = undefined;

  declare $refs: {
    uploadField: HTMLInputElement
  }

  uploadFile() {
    this.$refs.uploadField.click();
  }

  displayPicture(event: any){
    this.showPicture = true;
    const uploadedFile = event.target.files[0];
    this.picture = URL.createObjectURL(uploadedFile);
    this.pictureBlob = uploadedFile;
  }

  private user: User = User.newUser();

  private registerButtonLabel = "Register";
  private usernamePlaceHolder = "Username";
  private mailPlaceHolder = "Email address";
  private mailInputType = "email";
  private password = "";
  private passwordPlaceHolder = "Password";
  private passwordInputType = "password";
  private birthdatePlaceHolder = "Birthdate";

  private async register() {
    if(!this.pictureBlob){
      return;
    }
    await APIController.register(
        this.user,
        this.password,
        this.pictureBlob
    );
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
