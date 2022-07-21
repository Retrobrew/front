<template>
  <div class="friend-list-card">
    <FriendListPicture :user-uuid="friend.uuid" />
    <FriendListName
        v-bind:username="friend.username + ' ' + friend.country"
        v-bind:uuid="friend.uuid"
    />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import FriendListPicture from "@/components/friend/list/atoms/FriendListPicture.vue";
import FriendListName from "@/components/friend/list/atoms/FriendListName.vue";
import {Friend} from "@/object/Friend";

@Options({
  name:"UserListCard",
  components: { FriendListName, FriendListPicture},
  props: {
    friend: Friend
  }
})
export default class UserListCard extends Vue {

}
</script>

<style scoped>
.friend-list-card {
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;
}
</style>
