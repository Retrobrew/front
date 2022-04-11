<template>
  <p class="friend-list-title">Friend list</p>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "FriendListTitle"
})
export default class FriendListTitle extends Vue {
}
</script>

<style scoped>
.friend-list-title {
  font-size: 1.8em;
  text-align: center;
  padding: 12px;
}
</style>
