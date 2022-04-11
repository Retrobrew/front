<template>
  <div class="user-profile-change-picture">
    <UserProfilePicture :link="link" />
    <UserProfileButton :label="uploadButton" />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import UserProfilePicture from "@/components/user/profile/atoms/UserProfilePicture.vue";
import UserProfileButton from "@/components/user/profile/atoms/UserProfileButton.vue";

@Options({
  name: "UserProfileChangePicture",
  components: {
    UserProfilePicture,
    UserProfileButton,
  },
  props: {
    link: String
  }
})
export default class UserProfileChangePicture extends Vue {
  private uploadButton = "Upload";
}
</script>

<style scoped>
.user-profile-change-picture {
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
