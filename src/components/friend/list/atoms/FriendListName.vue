<template>
  <p>{{username}}</p>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "FriendListName",
  props: {
    username: String,
  }
})
export default class FriendListName extends Vue {
}
</script>

<style scoped>
.friend-list-card p {
  margin: auto 0;
}
</style>
