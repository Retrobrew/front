<template>
  <img :src="link" />
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "UserProfilePicture",
  props: {
    link: String
  }
})
export default class UserProfilePicture extends Vue {
}
</script>

<style scoped>
img {
  border: 1px solid #000000;
  margin: 8px;
}
</style>
