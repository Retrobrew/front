<template>
  <div class="comment-text">
    <p>{{content}}</p>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "CommentText",
  props: {
    content: String,
  }
})
export default class CommentText extends Vue {
}
</script>

<style scoped>
.comment-text {
  margin: 4px;
}
.comment-text p {
  margin: 0;
  padding: 0;
}
</style>
