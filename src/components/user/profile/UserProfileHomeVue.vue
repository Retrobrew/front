<template>
  <HeaderVue />
  <div id="user-profile" class="main-vue">
    <UserProfileHead :user-name="user.username" :description="user.sex + ' - 78'"/>
    <UserProfileBody
        :user-picture="user.picture"
        :password-name="passwordName"
        :password-value="passwordValue"
        :password-confirm-name="passwordConfirmName"
        :mail-name="mailName"
        :mail-value="user.mail"
        :countries-name="countriesName"
        :countries="countries"
        :country-value="countryValue"
    />
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
import {User} from "@/object/User";
import {inject} from "vue";

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
  private user: User | undefined = inject('user');
  private passwordName = "Password";
  private passwordConfirmName = "Confirm Password";
  private passwordValue = "P4$$w0rd";
  private mailName = "Email address";
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
