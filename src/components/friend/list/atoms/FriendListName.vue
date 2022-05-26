<template>
  <a :href="'/user'" class="link">
    <p>{{username}}</p>
  </a>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "FriendListName",
  props: {
    username: String,
    uuid: String
  }
})
export default class FriendListName extends Vue {
  private friendLink = "";
  async mounted() {
    await this.$nextTick();
    this.friendLink = `/user/${this.uuid}`;
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
