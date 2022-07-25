<template>
  <div class="mt-auto mb-auto">
    <a
        v-on:click="visitFriend(uuid)"
        class="link position-relative "
    >
      <p>{{username}}</p>
      <img :src="flagUrl">
    </a>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "FriendListName",
  props: {
    username: String,
    uuid: String,
    flagUrl: String,
  }
})
export default class FriendListName extends Vue {

  private visitFriend(friendUuid: string) {
    this.$router.push(`/user/${friendUuid}`)
  }
}
</script>

<style scoped>
.friend-list-card div a {
  margin: auto 0;
  display: flex;
  flex-direction: row;
}
.friend-list-card div a p {
  margin: auto 0;
}
.friend-list-card div a img {
  margin: 0 4px;
  height: 32px;
  width: 32px;
}
</style>
