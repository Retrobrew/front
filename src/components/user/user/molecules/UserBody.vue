<template>
  <div class="user-profile-body">
    <UserProfilePicture :link="userPicture" />
    <div class="text-center mb-3" v-if="friendshipStatus===null">
      <button
          v-on:click="onAddFriend"
          class="btn btn-sm btn-success">
        {{addFriendButton}}
      </button>
    </div>
    <div class="text-center mb-3" v-else-if="friendshipStatus==='accepted'">
      <button
          v-on:click="onUnfriend"
          class="btn btn-sm btn-light">
        Unfriend
      </button>
    </div>
    <div class="text-center mb-3" v-else-if="friendshipStatus==='pending'">
      <button
          v-on:click="onCancelRequest"
          class="btn btn-sm btn-danger">
        Cancel request
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
  private addFriendButton = "Add as friend";

  friendshipStatus!: string;

  private onAddFriend(): void {
    this.addFriendButton = "Request sent"
    this.$emit('request-friendship');
  }

  private onUnfriend(): void {
    this.addFriendButton = "Add as friend"
    this.$emit('unfriend');
  }

  private onCancelRequest(): void {
    this.addFriendButton = "Add as friend"
    this.$emit('cancel-request');
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
