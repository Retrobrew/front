<template>
  <a v-on:click="visitFriend(uuid)" class="link">
    <p>{{username}}</p>
  </a>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import APIController from "@/controller/APIController";

@Options({
  name: "FriendListName",
  props: {
    username: String,
    uuid: String
  }
})
export default class FriendListName extends Vue {

  private visitFriend(friendUuid: string) {
    APIController
        .getUserProfile(friendUuid)
        .then((res) => {
          window.location.pathname = "/user"
        }).catch(reason => {
          console.error(reason);
        })
  }
}
</script>

<style scoped>
.friend-list-card a {
  margin: auto 0;
}
.friend-list-card p {
  margin: auto 0;
}
</style>
