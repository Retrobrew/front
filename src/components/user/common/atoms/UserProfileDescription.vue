<template>
  <p>{{description}}</p>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "UserProfileDescription",
  props: {
    description: String,
  }
})
export default class UserProfileDescription extends Vue {
}
</script>

<style scoped>

</style>
