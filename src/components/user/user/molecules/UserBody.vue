<template>
  <div class="user-profile-body">
    <UserProfilePicture :link="userPicture" />
    <div class="text-center mb-3">
      <button
          :class="{ 'disabled': friendshipStatus !== null}"
          v-on:click="onAddFriend"
          class="btn btn-sm btn-success">
        {{addFriendButton}}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import UserProfilePicture from "@/components/user/common/atoms/UserProfilePicture.vue";

@Options({
  name: "UserBody",
  components: { UserProfilePicture },
  props: {
    userPicture: String,
    friendshipStatus: {
      type: String,
      required: true,
      default: null
    }
  }
})
export default class UserBody extends Vue {
  private addFriendButton = "";

  friendshipStatus!: string;

  mounted() {
    if (!this.friendshipStatus){
      this.addFriendButton = "Add friend";
    } else {
      this.addFriendButton = this.friendshipStatus
    }
  }

  private onAddFriend(): void {
    this.addFriendButton = "Request sent"
    this.$emit('request-friendship');
  }
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
