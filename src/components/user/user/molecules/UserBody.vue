<template>
  <div class="user-profile-body">
    <UserProfilePicture :link="userPicture" />
    <UserProfileButton :label="addFriendButton" />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import UserProfilePicture from "@/components/user/common/atoms/UserProfilePicture.vue";
import UserProfileButton from "@/components/user/common/atoms/UserProfileButton.vue";

@Options({
  name: "UserBody",
  components: {UserProfileButton, UserProfilePicture},
  props: {
    userPicture: String
  }
})
export default class UserBody extends Vue {
  private addFriendButton = "Add friend";
}
</script>

<style scoped>
.user-profile-body {
  justify-content: space-between;
}
.user-profile-body img {
  display: flex;
  flex-direction: column;
  min-height: 40px;
  height: 20%;
  max-height: 240px;
  min-width: 40px;
  width: 20%;
  max-width: 240px;
}
</style>
