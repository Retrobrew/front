<template>
  <div class="comment-author">
    <p>{{author}}</p>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "CommentAuthor",
  props: {
    author: String,
  }
})
export default class CommentAuthor extends Vue {
}
</script>

<style scoped>
.comment-author {
  background-color: seagreen;
  border-radius: 4px;
  color: #FFFFFF;
  margin: 4px;
  padding: 4px;
}
.comment-author p {
  margin: 0;
  padding: 0;
}
</style>
