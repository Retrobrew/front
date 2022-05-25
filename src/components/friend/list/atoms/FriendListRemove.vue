<template>
  <a v-on:click="unfriend" class="btn-close btn-rounded btn-sm btn"></a>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import APIController from "@/controller/APIController";

@Options({
  name: "FriendListRemove",
  props: {
    friendUuid: String
  }
})
export default class FriendListRemove extends Vue {
  unfriend(): void {
    APIController
        .unfriend(this.friendUuid)
        .then(res => {
          if(res.status === 200) {
            this.$parent.$emit("delete-friend", this.friendUuid);
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
