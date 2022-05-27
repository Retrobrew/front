<template>
  <input
      type="text"
      class="form-control m-2"
      placeholder="Add a title to your post!"
      v-model="title"
  />
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "PostCreationTitle",
  props: {
    title: String
  }
})
export default class PostCreationTitle extends Vue {
}
</script>

<style scoped>
p {
  margin: auto 0;
}
</style>
