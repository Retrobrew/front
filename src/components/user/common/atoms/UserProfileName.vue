<template>
  <h1>{{username}}</h1>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "UserProfileName",
  props: {
    username: String,
  }
})
export default class UserProfileName extends Vue {
}
</script>

<style scoped>

</style>
