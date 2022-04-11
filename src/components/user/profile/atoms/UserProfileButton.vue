<template>
  <button class="btn btn-outline-success user-profile-button">{{label}}</button>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "UserProfileButton",
  props: {
    label: String,
  }
})
export default class UserProfileButton extends Vue {
}
</script>

<style scoped>
.user-profile-button {
  margin: 24px auto;
  text-align: center;
  display: flex;
}
</style>
