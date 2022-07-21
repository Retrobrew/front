<template>
  <div class="user-profile-body">
    <UserProfileChangePicture :user-uuid="userUuid" />
    <div class="fields">
      <UserProfileField :field-name="passwordName" :value="passwordValue" :field-type="passwordType"/>
      <UserProfileField :field-name="passwordConfirmName" :value="passwordValue" :field-type="passwordType"/>
      <UserProfileField :field-name="mailName" :value="mailValue" :field-type="mailType"/>
      <UserProfileSelector :field-name="countriesName" :list="countries" :value="countryValue" />
    </div>
  </div>
  <UserProfileButton :label="saveButton" />
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import UserProfilePicture from "@/components/user/common/atoms/UserProfilePicture.vue";
import UserProfileField from "@/components/user/profile/atoms/UserProfileField.vue";
import UserProfileSelector from "@/components/user/profile/atoms/UserProfileSelector.vue";
import UserProfileButton from "@/components/user/common/atoms/UserProfileButton.vue";
import UserProfileChangePicture from "@/components/user/profile/molecules/UserProfileChangePicture.vue";

@Options({
  name: "UserProfileBody",
  components: {
    UserProfileChangePicture,
    UserProfileButton,
    UserProfilePicture,
    UserProfileField,
    UserProfileSelector,
  },
  props : {
    userUuid: String,
    passwordName: String,
    passwordValue: String,
    passwordConfirmName: String,
    mailName: String,
    mailValue: String,
    countriesName: String,
    countries: Array,
    countryValue: String,
  }
})
export default class UserProfileBody extends Vue {
  private saveButton = "Save";
  private mailType = "email";
  private passwordType = "password";
}
</script>

<style scoped>
.user-profile-body {
  display: flex;
  justify-content: space-between;
}
.user-profile-body .fields {
  margin: 8px;
  width: 40%;
}
</style>
