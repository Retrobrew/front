<template>
  <img :src="url" @error="loadDefault" class="card"/>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "FriendListPicture",
  props: {
    userUuid: String
  }
})
export default class FriendListPicture extends Vue {
  private userUuid!: string;
  private url: string  = "";

  mounted() {
    this.url = `${process.env.VUE_APP_AUTH_API_URL}/users/${this.userUuid}/avatar`
  }

  private loadDefault() {
    this.url = "/assets/avatar-placeholder.png"
  }
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
