<template>
  <div class="friend-list-card">
    <FriendListPicture :link="friend.picture" :user-uuid="friend.uuid" />
    <FriendListName
        v-bind:username="friend.username"
        v-bind:uuid="friend.uuid"
        :flag-url="friend.country"
    />
    <FriendListRemove
        v-on:delete-friend="$emit('delete-friend', $event)"
        v-bind:friend-uuid="friend.uuid"
    />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import FriendListPicture from "@/components/friend/list/atoms/FriendListPicture.vue";
import FriendListName from "@/components/friend/list/atoms/FriendListName.vue";
import FriendListRemove from "@/components/friend/list/atoms/FriendListRemove.vue";
import {Friend} from "@/object/Friend";

@Options({
  name:"FriendListCard",
  components: {FriendListRemove, FriendListName, FriendListPicture},
  props: {
    friend: Friend
  }
})
export default class FriendListCard extends Vue {

}
</script>

<style scoped>
.friend-list-card {
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;
}
</style>
