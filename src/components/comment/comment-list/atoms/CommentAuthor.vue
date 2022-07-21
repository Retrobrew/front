<template>
  <div class="comment-author">
    <img :src="authorPicture">
    <div>
      <p>{{author}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "CommentAuthor",
  props: {
    author: String,
    authorPicture: String,
  }
})
export default class CommentAuthor extends Vue {
}
</script>

<style scoped>
.comment-author {
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
}
.comment-author img {
  border-radius: 24px;
  height: 48px;
  width: 48px;
}
.comment-author p {
  background-color: seagreen;
  border-radius: 4px;
  color: #FFFFFF;
  margin: 4px;
  padding: 4px;
}
</style>
