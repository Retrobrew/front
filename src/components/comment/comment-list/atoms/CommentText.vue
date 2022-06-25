<template>
  <div class="comment-text">
    <p>Placeholder d'un commentaire sous un post!</p>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: "CommentText",
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
