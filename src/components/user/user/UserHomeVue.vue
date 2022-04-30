<template>
  <HeaderVue />
  <div id="user-profile" class="main-vue">
    <UserProfileHead :user-name="userName" :description="userDescription"/>
    <UserBody :user-picture="userPicture"/>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import HeaderVue from "@/components/header/HeaderVue.vue";
import UserProfileHead from "@/components/user/common/molecules/UserProfileHead.vue";
import UserBody from "@/components/user/user/molecules/UserBody.vue";

@Options({
  name: "UserHomeVue",
  components: {UserBody, UserProfileHead, HeaderVue}
})
export default class UserHomeVue extends Vue{
  private userName = "@Cédric🇫🇷";
  private userDescription = "Male - 25";
  private userPicture = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi1.kym-cdn.com%2Fphotos%2Fimages%2Ffacebook%2F000%2F782%2F020%2Ffad.jpg&f=1&nofb=1";
}
</script>

<style scoped>
#user-profile {
  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19) !important;
  border-radius: 8px;
  margin: 24px auto;
}
</style>
