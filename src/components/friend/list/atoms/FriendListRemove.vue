<template>
  <a
      v-on:click="unfriend(friendUuid)"
      class="btn-close btn-rounded btn-sm btn position-relative"
  ></a>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {FriendshipController} from "@/controller/FriendshipController";

@Options({
  name: "FriendListRemove",
  props: {
    friendUuid: String
  }
})
export default class FriendListRemove extends Vue {
  unfriend(friendUuid: string): void {
    FriendshipController
        .unfriend(friendUuid)
        .then(res => {
          if(res.status === 200) {
            this.$emit("delete-friend", friendUuid);
          }
      })

  }
}
</script>

<style scoped>
.friend-list-card a {
  margin: auto 0;
}
.btn {
  background-color: #e4e6eb
}
</style>
