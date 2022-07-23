<template>
  <div class="user-profile-head-description">
    <img :src="sex" />
    <p> - {{age}}</p>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "UserProfileDescription",
  props: {
    age: String,
    sex: String,
  }
})
export default class UserProfileDescription extends Vue {
}
</script>

<style scoped>
.user-profile-head-description {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.user-profile-head-description img {
  margin: 0 8px;
  height: 24px;
  width: 24px;
}
</style>
