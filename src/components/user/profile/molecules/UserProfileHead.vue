<template>
  <div class="user-profile-head">
    <UserProfileName :username="userName" />
    <UserProfileDescription :description="description" />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import UserProfileName from "@/components/user/profile/atoms/UserProfileName.vue";
import UserProfileDescription from "@/components/user/profile/atoms/UserProfileDescription.vue";

@Options({
  name: "UserProfileHead",
  components: {
    UserProfileDescription,
    UserProfileName
  },
  props: {
    userName: String,
    description: String,
  }
})
export default class UserProfileHead extends Vue {
}
</script>

<style scoped>
.user-profile-head {
  text-align: center;
}
</style>
