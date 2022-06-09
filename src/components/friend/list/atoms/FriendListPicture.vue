<template>
  <img :src="link?link:picturePlaceholder" class="card"/>
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
  private picturePlaceholder: string = '/assets/avatar-placeholder.png';

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
