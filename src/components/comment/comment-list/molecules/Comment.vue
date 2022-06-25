<template>
  <div class="comment">
    <CommentAuthor />
    <CommentText />
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import CommentAuthor from "@/components/comment/comment-list/atoms/CommentAuthor.vue";
import CommentText from "@/components/comment/comment-list/atoms/CommentText.vue";

@Options({
  name: "Comment",
  components: {CommentAuthor, CommentText},
  props: {
    comment: Number,
  }
})
export default class Comment extends Vue {
}
</script>

<style scoped>
.comment {
  display: flex;
}
</style>
