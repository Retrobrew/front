<template>
  <div class="friend-list-card">
    <FriendListPicture :link="friendPicture" />
    <FriendListName v-bind:username="friendName" />
    <FriendListRemove />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import FriendListPicture from "@/components/friend/list/atoms/FriendListPicture.vue";
import FriendListName from "@/components/friend/list/atoms/FriendListName.vue";
import FriendListRemove from "@/components/friend/list/atoms/FriendListRemove.vue";

@Options({
  name:"FriendListCard",
  components: {FriendListRemove, FriendListName, FriendListPicture}
})
export default class FriendListCard extends Vue {
  private friendPicture = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi1.kym-cdn.com%2Fphotos%2Fimages%2Ffacebook%2F000%2F782%2F020%2Ffad.jpg&f=1&nofb=1";
  private friendName = "@Cédric🇫🇷";
}
</script>

<style scoped>
.friend-list-card {
  display: flex;
  justify-content: space-between;
  padding: 24px 48px;
}
</style>
