<template>
  <img :src="link">
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "FriendListPicture",
  props: {
    link: String
  }
})
export default class FriendListPicture extends Vue {
}
</script>

<style scoped>
.friend-list-card img {
  min-height: 24px;
  height: 10%;
  max-height: 72px;
  min-width: 24px;
  width: 10%;
  max-width: 72px;
}
</style>
