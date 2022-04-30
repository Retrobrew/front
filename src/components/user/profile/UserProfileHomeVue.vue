<template>
  <HeaderVue />
  <div id="user-profile" class="main-vue">
    <UserProfileHead :user-name="userName" :description="userDescription"/>
    <UserProfileBody :user-picture="userPicture" :password-name="passwordName" :password-value="passwordValue" :password-confirm-name="passwordConfirmName" :mail-name="mailName" :mail-value="mailValue" :countries-name="countriesName" :countries="countries" :country-value="countryValue"/>
  </div>
  <div class="user-list">
    <FriendListVue />
    <GroupListVue />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import HeaderVue from "@/components/header/HeaderVue.vue";
import UserProfileHead from "@/components/user/common/molecules/UserProfileHead.vue";
import UserProfileBody from "@/components/user/profile/molecules/UserProfileBody.vue";
import FriendListVue from "@/components/friend/list/FriendListVue.vue";
import GroupListVue from "@/components/group/list/GroupListVue.vue";

@Options({
  name: "UserProfileHomeVue",
  components: {
    GroupListVue,
    FriendListVue,
    UserProfileBody,
    UserProfileHead,
    HeaderVue,
  }
})
export default class UserProfileHomeVue extends Vue {
  private userName = "@Quentin🇫🇷";
  private userDescription = "Male - 22";
  private userPicture = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qrSjHA3rS0ZIDbUcTzRONQHaHa%26pid%3DApi&f=1";
  private passwordName = "Password";
  private passwordConfirmName = "Confirm Password";
  private passwordValue = "P4$$w0rd";
  private mailName = "Email address";
  private mailValue = "qmolero@myges.fr";
  private countriesName = "Country";
  private countryValue = "France";
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
}
</script>

<style scoped>
#user-profile {
  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;
  border-radius: 8px;
  margin: 24px auto;
}
.user-list {
  display: flex;
  justify-content: center;
}
</style>
